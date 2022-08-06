import { doc } from "@firebase/firestore";
import  config  from '../../assets/config';
import { getDoc, updateDoc } from '@firebase/firestore'
import { ordersCol } from "../../utils/firebase";
import { NextApiRequest, NextApiResponse } from "next";

type LineItem = {
        price: number
        quantity: number,
}


export default async (req: NextApiRequest, res: NextApiResponse) => {
    const orderId = req.body.orderId

    const orderDocRef = doc(ordersCol, orderId)
    const orderDoc = await getDoc(orderDocRef)
    const order: any = orderDoc.data()


    const stripe = require('stripe')(process.env.STRIPE_SK);

    
    const line_items : LineItem[] = []
    for (let i= 0; i < order?.orderDetails?.items?.length; i++){
        const product = await stripe.products.retrieve(
            `${order?.orderDetails?.items[i].id}`
          );
        const lineItem : LineItem = {
            price: product.default_price,
            quantity: order?.orderDetails?.items[i].count,
          }
        line_items.push(lineItem)
    }
    
      const paymentLink = await  stripe.paymentLinks.create({
        line_items: line_items,
        after_completion: {type: 'hosted_confirmation', hosted_confirmation: {custom_message: 'Thank you for choosing topy tours'}}
      });


      await updateDoc(orderDocRef, {
        paymentLink: paymentLink,
        paymentStatus: 'waiting for payment'
      });
      //TODO: Send paymentLink email
      res.status(200).send({message: 'succesfully send payment link'});
};
