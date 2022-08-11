import { doc, updateDoc } from "@firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { Products } from "../../types";
import { productsCol } from "../../utils/firebase";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  
  // const stripe = require('stripe')(process.env.STRIPE_SK)
  const data = req.body.values;
  const imgPath = req.body.imgPath ?  req.body.imgPath : false
  const id = data.id;
  const currentPrice = req.body.currentPrice

  console.log(imgPath)

  // const stripeProductData =  {
  //   name: data.name,
  //   images: imgPath? imgPath : data.images,
  //   description: data.smallDescription,
  // } as StripeProducts

  // const stripeProduct = await stripe.products.update(
  //   data.id ,stripeProductData
  // );

  // const price = await stripe.prices.update(
  //   stripeProduct.default_price,
  //   {unit_amount_decimal: currentPrice*100}
  // );




  const product = {
    id: data.id,
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
