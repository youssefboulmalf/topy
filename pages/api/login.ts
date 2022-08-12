import { createHash } from 'crypto';
import type { NextApiRequest, NextApiResponse } from 'next';
var cookie = require('cookie');


export default (req: NextApiRequest, res: NextApiResponse) => {
  const request = req.body;
  const email = request.email;
  const password = request.password;
  const hash = createHash('sha256').update('userIsAdmin: true').digest('hex')

  let today = new Date();
  today.setHours(today.getHours() + 2);


  if(email === 'TopyTourAdmin' && password === '^rdv^oD>6@4>>w)') {
    res.setHeader('Set-Cookie', cookie.serialize('admin', hash, { path: '/', expires: today })).json({ status: true });
  } else {
    res.status(401).json({ status: false });
  }
}
