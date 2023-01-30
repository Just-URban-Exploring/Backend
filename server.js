import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import router from './routes/userRoute.js';

const URI = process.env.MONGO || "mongodb://localhost:27017/tourguideapp";
const app = express();
const PORT = 5555;

mongoose
  .connect(URI)
  .then(() => console.log(`Mit Datenbank verrbunden`))
  .catch((error) => console.log(`Verbinden mit Datenbank fehlgeschlagen`, err));

mongoose.connection.on('error', console.log);

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server läuft auf Port: ${PORT}`);
});

