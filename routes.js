import { get } from './get.js';
import { post } from './post.js';

export const requestListener = function (req, res) {
  res.setHeader('Content-Type', 'application/json');

  switch (req.method) {
    case 'GET': {
      get(req, res);
      break;
    }

    case 'POST': {
      post(req, res);
      break;
    }

    default:
      res.statusCode = 400;
      res.end(JSON.stringify({ error: 'Method not supported' }));
  }
};
