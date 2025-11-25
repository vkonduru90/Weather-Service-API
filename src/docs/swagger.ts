import swaggerJSDoc from "swagger-jsdoc";
import path from "path";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Weather API",
      version: "1.0.0",
      description: "A simple Express Weather API using NOAA",
    },
    servers: [
      {
        url: "http://localhost:3000/api/v1",
      },
    ],
  },

  apis: [
    path.join(__dirname, "../routes/*.ts"),
    path.join(__dirname, "../controllers/*.ts"),
    path.join(__dirname, "./schemas.yaml"),
  ],
};

export const swaggerSpec = swaggerJSDoc(options);
