const http = require('http');
const app = require('./src/app');
const { env } = require('./src/utility/config');
const { dbsync } = require('./src/utility/db');

const server = http.createServer(app);

const PORT = env('PORT');
const init = async () => {
  try {
    await dbsync();
    server.listen(PORT, () => {
      console.log(`Connected to ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

init();
