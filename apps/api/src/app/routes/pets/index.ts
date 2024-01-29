import express from 'express';

import { PetService } from '../../pet-rescue-mgmt/pet/pet.service';

const petsRouter = express.Router();

petsRouter.get('/', async (req, res) => {
  res.json(await PetService.getAll());
});

petsRouter.post('/', async (req, res) => {
  res.json(await PetService.createPet(req.body));
});

petsRouter.delete('/:id', async (req, res) => {
  res.json(await PetService.delete(req.params.id));
});

export = petsRouter;
