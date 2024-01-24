/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import * as path from 'path';

import { DBHelper } from './app/helper/db.helper';
import { PetService } from './app/pet-rescue-mgmt/pet/pet.service';

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.get('/api/pets', async (req, res) => {
  res.json(await PetService.getAll());
});

app.post('/api/pets', async (req, res) => {
  res.json(await PetService.createPet(req.body));
});

app.delete('/api/pets/:id', async (req, res) => {
  res.json(await PetService.delete(req.params.id));
});

const PORT = 3333;
const server = app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}/api`);
});
server.on('error', console.error);

DBHelper.init();