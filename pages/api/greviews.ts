export default async (req: NextApiRequest, res: NextApiResponse) => {

  const url = 'https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJLUT4pj4dNxgRUd-TCWtgybA&fields=name%2Crating%2Cformatted_phone_number&key=AIzaSyAGVwlJ3u6yZ3KAbIBo-PMX_Z8dmS6PQP0';
    const response = await fetch(url, {
      method: 'GET',
      headers: {},
      referrerPolicy: 'no-referrer',
    });
  if (response) {
    res.send(response);
  } else {
    res.status(401).json({ status: false });
  }
}

