import { prisma } from "../config";

// Creación de paciente
export const POST = async (req, res) => {
    try {
        // Extraer datos del cuerpo de la solicitud
        const { paciente_nombre, paciente_apellido, paciente_direccion, paciente_email, paciente_numeroContacto, paciente_historialMedico } = req.body;

        // Crear un nuevo paciente en la base de datos utilizando Prisma
        const paciente = await prisma.paciente.create({
            data: {
                paciente_nombre,
                paciente_apellido,
                paciente_direccion,
                paciente_email,
                paciente_numeroContacto,
                paciente_historialMedico
            }
        });

        // Responder con el paciente creado
        return res.json(paciente);
    } catch (error) {
        // Manejar errores y responder con un mensaje de error
        console.log(error);
        return res.json({
            status: "error",
            messeger: "Internal Server Error"
        });
    }
}

// Obtener todos los pacientes
export const GET = async (req, res) => {
    try {
        // Obtener todos los pacientes de la base de datos
        const pacientes = await prisma.paciente.findMany();

        // Responder con la lista de pacientes
        return res.json(pacientes);
    } catch (error) {
        // Manejar errores y responder con un mensaje de error
        console.log(error);
        return res.json({
            status: "error",
            messeger: "Internal Server Error"
        });
    }
}

// Obtener un paciente por ID
export const GETBYID = async (req, res) => {
    try {
        // Obtener el ID del paciente de los parámetros de la solicitud
        const { pacientes_id } = req.params;

        // Buscar un paciente por ID en la base de datos
        const pacienteID = await prisma.paciente.findUnique({
            where: { paciente_id: parseInt(pacientes_id) }
        });

        // Responder con el paciente encontrado
        return res.json(pacienteID);
    } catch (error) {
        // Manejar errores y responder con un mensaje de error
        console.log(error);
        return res.json({
            status: "error",
            messeger: "Internal Server Error"
        });
    }
}

// Actualizar información de un paciente
export const PUT = async (req, res) => {
    try {
        // Obtener el ID del paciente de los parámetros de la solicitud
        const { pacientes_id } = req.params;

        // Extraer datos actualizados del cuerpo de la solicitud
        const { paciente_nombre, paciente_apellido, paciente_direccion, paciente_email, paciente_numeroContacto, paciente_historialMedico } = req.body;

        // Actualizar la información del paciente en la base de datos
        const paciente = await prisma.paciente.update({
            where: {
                paciente_id: parseInt(pacientes_id),
            },
            data: {
                paciente_nombre,
                paciente_apellido,
                paciente_direccion,
                paciente_email,
                paciente_numeroContacto,
                paciente_historialMedico
            }
        });

        // Responder con el paciente actualizado
        return res.json(paciente);
    } catch (error) {
        // Manejar errores y responder con un mensaje de error
        console.log(error);
        return res.json({
            status: "error",
            messeger: "Internal Server Error"
        });
    }
}

// Eliminar un paciente por ID
export const DELETE = async (req, res) => {
    try {
        // Obtener el ID del paciente de los parámetros de la solicitud
        const { pacientes_id } = req.params;

        // Eliminar el paciente de la base de datos
        await prisma.paciente.delete({
            where: {
                paciente_id: parseInt(pacientes_id),
            }
        });

        // Responder con un mensaje de éxito
        return res.json({
            status: "success",
            message: "Paciente eliminado correctamente",
        });
    } catch (error) {
        // Manejar errores y responder con un mensaje de error
        console.log(error);
        return res.json({
            status: "error",
            message: "Internal Server Error",
        });
    }
};
