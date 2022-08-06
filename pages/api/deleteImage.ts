import { ref, deleteObject } from "firebase/storage";
import type { NextApiRequest, NextApiResponse } from "next";
import { storage, productsCol } from "../../utils/firebase";
import { doc, updateDoc } from "@firebase/firestore";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {url, imageArray, index} = req.body
  delete imageArray[index]
  const path = url.split("/o/")[1].replace(/%2F/g, "/").split("?")[0];
  const id = url.split('%2F')[1]
  const desertRef = ref(storage, path);
  deleteObject(desertRef)
    .then(() => {
        const productDocRef = doc(productsCol, id);
         updateDoc(productDocRef, {images: imageArray
        });
        res.status(200).send(imageArray);
    })
};
