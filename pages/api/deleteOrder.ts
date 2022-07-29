import type { NextApiRequest, NextApiResponse } from "next";
import { ordersCol } from "../../utils/firebase";
import { doc, deleteDoc } from "firebase/firestore";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const data = req.body
    const id = data.orderId

    console.log(id)
    const orderRef = doc(ordersCol, `${id}`)
    await deleteDoc(orderRef);
      res.status(200);
};
