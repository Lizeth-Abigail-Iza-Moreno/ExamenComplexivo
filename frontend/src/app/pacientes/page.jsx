'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { obtenerPacientes, eliminarPacientes } from '@/lib/pacientes.axios'

const pacientes = () => {// Variables de estado para almacenar pacientes 
    const [pacientes, setpacientes] = useState([])

    useEffect(() => {
        listarPacientes()
        console.log(pacientes)
    }, [])
    // Obtener pacientes de la API usando la función obtenerPacientes
    const listarPacientes = async () => {
        const _pacientes = await obtenerPacientes()
        console.log(_pacientes)
        setpacientes(_pacientes)
    }
    const _eliminarPaciente = async (id) => {  // Actualizar la lista de pacientes después de la eliminación
        if (window.confirm('¿Estás seguro de que quieres eliminar este paciente?')) {
            const _pacientes = await eliminarPacientes(id)
            listarPacientes()
        }
    }
    return (
        <div className="container">
            <h2 className="text-center"> Pacientes registrados </h2>
            <Link href="/crearPacientes" className="btn btn-success">Añadir Nuevo</Link>
            <table className="table table-bordered table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Dirección</th>
                        <th scope="col">Teléfono</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Historial Medico</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pacientes.map((paciente) => {

                            return <tr key={paciente.paciente_id}>
                                <td>{paciente.paciente_id}</td>
                                <td>{paciente.paciente_nombre}</td>
                                <td>{paciente.paciente_apellido}</td>
                                <td>{paciente.paciente_direccion}</td>
                                <td>{paciente.paciente_numeroContacto}</td>
                                <td>{paciente.paciente_email}</td>
                                <td>{paciente.paciente_historialMedico}</td>
                                <td>
                                    <Link href={`/pacientes/${paciente.paciente_id}`} className="btn btn-warning">Editar</Link>
                                    <button type='button' className="btn btn-danger" onClick={() => _eliminarPaciente(paciente.paciente_id)}>Eliminar</button>
                                </td>
                            </tr>
                        })}
                </tbody>
            </table>
        </div>
    )
}
export default pacientes