import express, {json} from 'express';

import cors from 'cors';

import urlRoutes from './routes/urlRoutes.js';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';


// importar swagger
import { swaggerUi, swaggerSpec } from "./config/swagger.js";

dotenv.config();

const app = express();

app.use(json());

//cors
app.use(cors({origin: process.env.FRONTEND_URL})); //frontend url

// ruta swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//db connection
connectDB();


//routes
app.use("/", urlRoutes);




//port
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});