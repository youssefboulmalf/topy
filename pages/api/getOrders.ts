import type { NextApiRequest, NextApiResponse } from "next";
import { ordersCol } from "../../utils/firebase";
import { getDocs} from "@firebase/firestore";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const snapshot = await getDocs(ordersCol);
    const orders = snapshot.docs.map(doc => doc.data());
      res.status(200).json(orders);

};
