import http from 'node:http';

import { configuration } from './app/config.js';
import { app } from './app/index.js';
import { connect } from './app/database.js';

const { port } = configuration.server;

// Connect to the database
connect();

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
