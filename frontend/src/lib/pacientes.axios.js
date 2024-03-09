import axios from "axios";

// URL base de la API
// const URI = "http://10.40.27.100:3001/pacientes";
const URI = "http://localhost:3001/pacientes";

// Obtener la lista de pacientes
export const obtenerPacientes = async () => {
    try {
        const { data } = await axios.get(URI);
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
};

// Crear un nuevo paciente
export const crearPacientes = async (paciente) => {
    try {
        const { data } = await axios.post(URI, paciente);
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
};

// Editar un paciente existente por su ID
export const editarPaciente = async (id, paciente) => {
    try {
        const { data } = await axios.put(`${URI}/${id}`, paciente);
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
};

// Obtener información de un paciente por su ID
export const obtenerPaciente = async (id) => {
    try {
        const { data } = await axios.get(`${URI}/${id}`);
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
};

// Eliminar un paciente por su ID
export const eliminarPacientes = async (id) => {
    try {
        const { data } = await axios.delete(`${URI}/${id}`);
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
};


