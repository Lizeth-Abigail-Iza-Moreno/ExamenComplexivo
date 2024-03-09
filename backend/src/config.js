import { config } from "dotenv";
import { PrismaClient } from "@prisma/client"
config(); // Carga las variables de entorno desde un archivo .env.
// Crea una instancia del cliente Prisma para interactuar con la base de datos.
export const prisma = new PrismaClient();


// Exporta el puerto que la aplicación escuchará 3001.
export const PORT = process.env.PORT || 3001;

