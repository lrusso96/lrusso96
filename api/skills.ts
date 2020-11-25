import { NowRequest, NowResponse } from '@vercel/node';
import { renderToString } from 'react-dom/server';

import { Skills } from '../components/skills/Skills';

/**
 * Skills
 * Returns an image displaying icons of skills and languages
 * @param {NowRequest} req Request for Image
 * @param {NowResponse} res Response to request.
 */
export default async function (req: NowRequest, res: NowResponse) {
  // Hey! I'm returning an image!
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');
  
  // Generating the component and rendering it
  const text = renderToString(
    Skills({})
  );
  return res.status(200).send(text);
}