import type { NextApiRequest, NextApiResponse } from "next";
import { productsCol } from "../../utils/firebase";
import { doc, setDoc, getDocs} from "@firebase/firestore";
import {  Products } from "../../types";

export default async (req: NextApiRequest, res: NextApiResponse) => {

  const data = req.body.values;
  const imgPath = req.body.imgPath ?  req.body.imgPath : false


  
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


  const productRef = doc(productsCol, data.id);
  setDoc(productRef, product)
    .then(() => {
      res.status(200).send('good')
    })
    .catch((e) => {
      res.status(400).send(e)
    });
};