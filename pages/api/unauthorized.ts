import { NextApiRequest, NextApiResponse } from "next";

export default async (_req: NextApiRequest, res: NextApiResponse) => {
    res.status(401).send('unauthorized')
}
