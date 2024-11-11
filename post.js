import { books, authors } from './data.js';

export function post(req, res) {
  let body = '';

  req.on('data', (chunk) => {
    body += chunk.toString();
  });

  req.on('end', () => {
    try {
      const data = JSON.parse(body);

      switch (req.url) {
        case '/books': {
          books.push(data);
          res.writeHead(200);
          res.end(JSON.stringify({ message: 'Book added successfully' }));
          break;
        }
        case '/authors': {
          authors.push(data);
          res.writeHead(200);
          res.end(JSON.stringify({ message: 'Author added successfully' }));
          break;
        }
        default: {
          res.writeHead(404);
          res.end(JSON.stringify({ error: 'Resource not found' }));
        }
      }
    } catch (error) {
      res.writeHead(400);
      res.end(JSON.stringify({ error: 'Invalid JSON format' }));
    }
  });
}
