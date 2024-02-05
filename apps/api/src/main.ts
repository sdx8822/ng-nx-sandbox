import express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import * as path from 'path';

import { DBHelper } from './app/helper/db.helper';
import router from './app/routes';

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use('/api', router);

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

const PORT = 3333;
const server = app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}/api`);
});
server.on('error', console.error);

DBHelper.init();