import express from 'express';

import petsRouter from './pets';

const router = express.Router();

router.use('/pets', petsRouter);

export = router;