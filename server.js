import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import userRouter from './routes/userRoute.js';

const URI = process.env.MONGO;
const app = express();
const PORT = 5555;

mongoose
  .connect(URI)
  .then(() => console.log(`Mit Datenbank verrbunden`))
  .catch((error) => console.log(`Verbinden mit Datenbank fehlgeschlagen`, error));

mongoose.connection.on('error', console.log);

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/user', userRouter);

app.listen(PORT, () => {
  console.log(`Server läuft auf Port: ${PORT}`);
});

