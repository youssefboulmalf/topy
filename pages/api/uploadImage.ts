// import { doc, updateDoc } from "@firebase/firestore";
import { getDownloadURL,ref, uploadBytes } from "firebase/storage";
import { storage } from "../../utils/firebase";

import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import formidable, {File} from "formidable";

/* Don't miss that! */
export const config = {
  api: {
      bodyParser: false,
    },
};

type ProcessedFiles = Array<[string, File]>;

export default async (req: NextApiRequest, res: NextApiResponse) => {

    let status = 200
    
    let id = "";
    const files = await new Promise<ProcessedFiles | undefined>(
    (resolve, reject) => {
      const form = new formidable.IncomingForm();
      const files: ProcessedFiles = [];
      form.on("file", function (field, file: any) {
        files.push([field, file]);
      });
      form.on("field", function (_name, value: string) {
        id = value;
      });
      form.on("end", () => resolve(files));
      form.on("error", (err) => reject(err));
      form.parse(req, () => {
          //
      });
    }
    ).catch((e) => {
    console.log(e);
    status = 500;
  });

  
  const imageArray : string[] = [];
  if(files?.length){

      for (let i = 0; i < files.length; i++) {
          
        
          
    const imgFile:Buffer  = fs.readFileSync(files[i][1].filepath)
    
    
    console.log(imgFile)
    
    const path = `images/${id}/${files[i][1].originalFilename}`;
    
    const storageRef = ref(storage, path);
    await uploadBytes(storageRef, imgFile).then((_snapshot) => {
    });
    await getDownloadURL(storageRef).then((url)=>{
        console.log(url)
        imageArray.push(url);
    })
}
}

const body = {
    status: "Succes",
    imageArray : imageArray,
  };
res.status(status).json(body);
};

