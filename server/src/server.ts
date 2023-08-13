import express from 'express'

import { Router, Request, Response } from 'express';
import { config } from 'dotenv';

config();

const app   = express();
const route = Router();

app.use(express.json());

route.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello world with Typescript' })
});

app.use(route);

app.listen(process.env.PORT || 3333, () => 'server running on port 3333');