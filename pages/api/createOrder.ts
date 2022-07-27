import type { NextApiRequest, NextApiResponse } from "next";
import { ordersCol } from "../../utils/firebase";
import { doc, setDoc } from "@firebase/firestore";
import { CheckoutOrder, Order } from "../../types";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const orderData: CheckoutOrder = JSON.parse(req.body);
  console.log(req.body)
  //todo fetch up to date id data
  const id = "2";
  const order = {
    id: id,
    creationDate: Date.now(),
    groupTotal: orderData.groupTotal,
    totalPrice: orderData.totalPrice,
    orderStatus: "enquiry",
    orderDetails: orderData.orderDetails,
  } as Order
  const orderRef = doc(ordersCol, id);
  setDoc(orderRef, order)
    .then(() => res.status(200))
    .catch((e) => {
      console.log(e);
      res.status(400)
    });
};
