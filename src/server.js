import express, {json} from 'express';

import cors from 'cors';

import urlRoutes from './routes/urlRoutes.js';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';


dotenv.config();

const app = express();

app.use(json());

//cors
app.use(cors({origin: process.env.FRONTEND_URL})); //frontend url

//db connection
connectDB();


//routes
app.use("/api/urls", urlRoutes);




//port
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});