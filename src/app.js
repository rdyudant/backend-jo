import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import joRoutes from './routes/joRoute.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/eng/api', joRoutes);

export default app;