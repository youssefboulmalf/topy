import type { NextApiRequest, NextApiResponse } from "next";
import { ordersCol } from "../../utils/firebase";
import { doc, setDoc, getDocs} from "@firebase/firestore";
import { CheckoutOrder, Order } from "../../types";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const orderData: CheckoutOrder = req.body;
  const snapshot = await getDocs(ordersCol);
  const count = snapshot.size + 1
  const id : string = count.toString();
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
    .then(() => {
      res.status(200).send('good')
    })
    .catch((e) => {
      console.log(e);
      res.status(400).send(e)
    });
};
