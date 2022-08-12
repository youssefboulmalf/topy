import { doc, updateDoc } from "@firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { Products } from "../../types";
import { productsCol } from "../../utils/firebase";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  
  // const stripe = require('stripe')(process.env.STRIPE_SK)
  const data = req.body.values;
  const imgPath = req.body.imgPath ?  req.body.imgPath : false
  const id = req.body.id;
  const currentPrice = req.body.currentPrice



  const product = {
    id: id,
    name: data.name,
    price: data.price,
    discount: data.discount,
    category: data.category,
    currentPrice: currentPrice,
    locations: data.locations,
    images: imgPath? imgPath : data.images,
    smallDescription: data.smallDescription,
    description: data.description,
    duration: data.duration,
  } as Products


  const productDocRef = doc(productsCol, id);
  await updateDoc(productDocRef, product);
  res.status(200).send('update succesfull');
};
