import type { NextApiRequest, NextApiResponse } from "next";
import { ordersCol } from "../../utils/firebase";
import { doc, setDoc} from "@firebase/firestore";
import { CheckoutOrder, Order } from "../../types";
import config from '../../assets/config'
import { postData } from "utils/services";
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
      postData(`${config.baseUrl}/api/sendMail`,{type: 'enquiry', order: order})
      return res.status(200).send('good')
    })
    .catch((e) => {
      return res.status(400).send(e)
    });
};
