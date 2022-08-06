import { NextApiRequest, NextApiResponse } from "next";


const endpointSecret = process.env.STRIPE_WHS;
export default async (req: NextApiRequest, res: NextApiResponse) => {

    const stripe = require('stripe');
    const sig = req.headers['stripe-signature'];

    let event: any;

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
      } catch (err) {
        res.status(400).send(`Webhook Error: ${err.message}`);
        return;
      }
    
      // Handle the event
      switch (event.type) {
        case 'checkout.session.completed':
          const paymentIntent = event.data.object;
          // Then define and call a function to handle the event payment_intent.succeeded
          break;
        // ... handle other event types
        default:
          console.log(`Unhandled event type ${event.type}`);
      }
    
      // Return a 200 response to acknowledge receipt of the event
      res.send('');
}
