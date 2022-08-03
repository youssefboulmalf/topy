import { doc, updateDoc } from "@firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { Products } from "../../types";
import { productsCol, storage } from "../../utils/firebase";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body.values;
  const imgPath = req.body.imgPath ?  req.body.imgPath : false
  const id = data.id;

  const product = {
    id: data.id,
    name: data.name,
    price: data.price,
    discount: data.discount,
    category: data.category,
    currentPrice: data.currentPrice,
    locations: data.locations,
    images: imgPath? imgPath : data.images,
    smallDescription: data.smallDescription,
    description: data.description,
    duration: data.duration
  } as Products


  const productDocRef = doc(productsCol, id);
  await updateDoc(productDocRef, product);
  res.status(200);
};
