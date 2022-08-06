import type { NextApiRequest, NextApiResponse } from "next";
import { productsCol } from "../../utils/firebase";
import { doc, setDoc} from "@firebase/firestore";
import {  Products, StripeProducts } from "../../types";

export default async (req: NextApiRequest, res: NextApiResponse) => {

  const stripe = require('stripe')(process.env.STRIPE_SK)

  const data = req.body.values;
  const imgPath = req.body.imgPath ?  req.body.imgPath : false
  const currentPrice = req.body.currentPrice

  console.log(data.currentPrice, data)


  const stripeProductData =  {
    id: data.id,
    name: data.name,
    default_price_data : {currency: 'usd', unit_amount_decimal: currentPrice * 100},
    images: imgPath? imgPath : data.images,
    description: data.smallDescription,
  } as StripeProducts

  const stripeProduct = await stripe.products.create(stripeProductData);


  
  const product = {
    id: data.id,
    name: data.name,
    price: data.price,
    discount: data.discount,
    category: data.category,
    currentPrice: currentPrice,
    locations: data.locations,
    images: imgPath ? imgPath : data.images,
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