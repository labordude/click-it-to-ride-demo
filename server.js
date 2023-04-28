const jsonServer = require('json-server');
const cors = require('cors');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json')); // <== Will be created later
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);
const port = 3000; // <== You can change the port

server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});
