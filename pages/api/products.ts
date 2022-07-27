import type { NextApiRequest, NextApiResponse } from 'next';
import { getDocs } from '@firebase/firestore'
import { productsCol } from '../../utils/firebase'



export default async (_req: NextApiRequest, res: NextApiResponse) => {

  const snapshot = await getDocs(productsCol);
  const products = snapshot.docs.map(doc => doc.data());
    res.status(200).json(products);
}