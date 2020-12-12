import { NextApiRequest, NextApiResponse } from 'next';
import MailerLite from 'mailerlite-api-v2-node';

const GROUP_ID = 105294742;
const mailerLite = MailerLite(process.env.MAILER_LITE_KEY as string);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const name = req.body.name;
  const email = req.body.email;

  if (!name || !email) {
    res.statusCode = 400;
    res.end('ERROR: name and/or email missing');
    return;
  }

  const response = await mailerLite.addSubscriberToGroup(GROUP_ID, {
    name,
    email,
  });

  // @ts-ignore
  if (response.email !== email) {
    res.statusCode = 500;
    res.end(`Error occured when adding subscriber`);
  } else {
    res.statusCode = 200;
    res.end();
  }
}
