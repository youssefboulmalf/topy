import { doc, updateDoc } from "@firebase/firestore";
import { ordersCol } from "../../utils/firebase";
import { NextApiRequest, NextApiResponse } from "next";

const orderStates = ["enquiry", "contacted", "completed"];

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;
  const id = data.orderId;
  const orderStatus = data.orderStatus;

  const newStatus = orderStates.indexOf(orderStatus) + 1;

  const orderDocRef = doc(ordersCol, id);
  await updateDoc(orderDocRef, {
    orderStatus: orderStates[newStatus],
  });
  res.status(200).send({message: 'status change was succesfull'});
};
