// Importar el módulo Router de Express
import { Router } from 'express';
import { DELETE, GET, GETBYID, POST, PUT } from '../controllers/paciente'; // Importar los controladores para las operaciones CRUD de pacientes

// Crear un nuevo enrutador de Express
const router = Router();

// Definir rutas y asociarlas con los controladores correspondientes
router.post("/", POST); // Ruta para la creación de un nuevo paciente 
router.get("/", GET); // Ruta para obtener todos los pacientes 
router.get("/:pacientes_id", GETBYID); // Ruta para obtener un paciente por ID 
router.put("/:pacientes_id", PUT); // Ruta para actualizar la información de un paciente por ID 
router.delete("/:pacientes_id", DELETE); // Ruta para eliminar un paciente por ID 

export default router;
