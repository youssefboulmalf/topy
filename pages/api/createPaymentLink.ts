import { doc } from "@firebase/firestore";
import  config  from '../../assets/config';
import { getDoc } from '@firebase/firestore'
import { ordersCol } from "../../utils/firebase";

type LineItem = {
        price: number
        quantity: number,
}


export default async (req: NextApiRequest, res: NextApiResponse) => {
    const orderId = req.body.orderId

    const orderDocRef = doc(ordersCol, orderId)
    const orderDoc = await getDoc(orderDocRef)
    const order: any = orderDoc.data()


    const stripe = require('stripe')(process.env.STRIPE_SK);

    
    const line_items : LineItem[] = []
    for (let i; i < order?.orderDetails?.items?.length; i++){
        const product = await stripe.products.retrieve(
            `${orderId}`
          );
        const lineItem : LineItem = {
            price: product.default_price,
            quantity: order?.orderDetails?.items[i].count,
          }
        line_items.push(lineItem)
    }
    
      const session = await stripe.checkout.sessions.create({
        line_items: line_items,
        mode: 'payment',
        success_url: `${config.baseUrl}/`,
        cancel_url: `${config.baseUrl}/`,
      });
    
      console.log(session.url)
};
