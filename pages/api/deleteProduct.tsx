import type { NextApiRequest, NextApiResponse } from "next";
import { productsCol } from "../../utils/firebase";
import { doc, deleteDoc } from "firebase/firestore";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const data = req.body
    const id = data.orderId

    const productRef = doc(productsCol, `${id}`)
    await deleteDoc(productRef);
      res.status(200).send('Product was succesfully deleted');
};
