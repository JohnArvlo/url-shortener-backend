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
// app.use(cors({origin: process.env.FRONTEND_URL})); //frontend url
// app.use(cors({
//   origin: [process.env.FRONTEND_URL, process.env.BASE_URL], 
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   allowedHeaders: ["Content-Type", "Authorization"]
// }));

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));



// ruta swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//db connection
connectDB();


//routes
app.use("/", urlRoutes);




//port
const PORT = process.env.PORT || 3000; // 👈 obligatorio en Azure
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));