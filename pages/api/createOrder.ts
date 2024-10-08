import type { NextApiRequest, NextApiResponse } from "next";
import { ordersCol } from "../../utils/firebase";
import { doc, setDoc} from "@firebase/firestore";
import { CheckoutOrder, Order } from "../../types";
import { postData } from "utils/services";
import { server } from "utils/server";
var crypto = require("crypto");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const orderData: CheckoutOrder = req.body;
  const id = `order_${crypto.randomBytes(10).toString('hex')}`;
  
  const order = {
    id: id,
    creationDate: Date.now(),
    groupTotal: orderData.groupTotal,
    totalPrice: orderData.totalPrice,
    orderStatus: "enquiry",
    orderDetails: orderData.orderDetails,
    paymentLink: '',
    paymentStatus: 'Not payed'
  } as Order
  const orderRef = doc(ordersCol, id);
  setDoc(orderRef, order)
    .then(() => {
      console.log("posting to sendmail")
      postData(`${server}/api/sendMail`,{type: 'enquiry', order: order})
      .then(r =>{
        console.log(r)
        return res.status(200).send(id)
      })
      .catch(e=>{
        console.log(e)
      })
    })
    .catch((e) => {
      console.log("not posting to sendmail")
      return res.status(400).send(e)
    });
};
