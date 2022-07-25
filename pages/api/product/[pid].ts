import type { NextApiRequest, NextApiResponse } from 'next';
import { doc, getDoc } from '@firebase/firestore'
import { productsCol } from '../../../utils/firebase'


export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {query: { pid },
  } = req



 const productDocRef = doc(productsCol, `${pid}`)
  const productDoc = await getDoc(productDocRef)
  const product = productDoc.data()
  res.status(200).json(product);
}
