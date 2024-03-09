import express from "express";
import bodyParcer from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rutasPacientes from "./routers/paciente";

// CONFIG SERVER //
const app = express();

// Configuracion de los  MIDDLEWARES 
app.use(express.json());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParcer.json({ limit: "30mb", extended: true }));
app.use(bodyParcer.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Configuracion de las rutas 
app.use("/pacientes", rutasPacientes);
export default app;
