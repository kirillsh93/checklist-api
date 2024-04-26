import { createServer } from 'node:http';
import { configuration } from './app/config.js';

const { port } = configuration.server;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
