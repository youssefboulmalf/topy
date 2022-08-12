import type { NextApiRequest, NextApiResponse } from "next";
import { productsCol } from "../../utils/firebase";
import { doc, setDoc } from "@firebase/firestore";
import { Products } from "../../types";
var crypto = require("crypto");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  
  const data = req.body.values;
  const imgPath = req.body.imgPath ? req.body.imgPath : false;
  const currentPrice = req.body.currentPrice;
  const id = `product_${crypto.randomBytes(10).toString('hex')}`;
  

  const product = {
    id: id,
    name: data.name,
    price: data.price,
    discount: data.discount,
    category: data.category,
    currentPrice: currentPrice,
    locations: data.locations,
    images: imgPath ? imgPath : data.images,
    smallDescription: data.smallDescription,
    description: data.description,
    duration: data.duration,
  } as Products;

  const productRef = doc(productsCol, id);
  await setDoc(productRef, product);
  res.status(200).send(id);
};
