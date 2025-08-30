import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0", // versión OpenAPI
    info: {
      title: "Short URL API",
      version: "1.0.0",
      description: "API para acortar y redireccionar URLs",
    },
    servers: [
      {
        url: process.env.BASE_URL || "http://localhost:3000", 
      },
    ],
  },
  apis: ["./src/routes/*.js"], // Aquí estarán los comentarios JSDoc
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };
