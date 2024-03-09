'use client'
// Importar funciones para usar router y parámetros de ruta
import React, { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { obtenerPaciente, editarPaciente } from '@/lib/pacientes.axios'

const Editarpacientes = () => {
    const router = useRouter()   // para acceder al router
    const params = useParams() //para obtener los parámetros de la ruta
    const [Nombre, setNombre] = useState('') // para almacenar los datos de los pacientes
    const [Apellido, setApellido] = useState('')
    const [Direccion, setDireccion] = useState('')
    const [Telefono, setTelefono] = useState('')
    const [Correo, setCorreo] = useState('')
    const [HistorialMedico, setHistorialMedico] = useState('')

    useEffect(() => {    // Obtener los pacientes al cargar el componente
        listarPaciente()
    }, [])

    const listarPaciente = async () => {  // Obtener los pacientes usando el ID del parámetro de ruta
        const _paciente = await obtenerPaciente(params.id) // Actualizar los datos de los pacientes
        setNombre(_paciente.paciente_nombre)
        setApellido(_paciente.paciente_apellido)
        setDireccion(_paciente.paciente_direccion)
        setTelefono(_paciente.paciente_numeroContacto)
        setCorreo(_paciente.paciente_email)
        setHistorialMedico(_paciente.paciente_historialMedico)
    }

    const guardarDatos = async (e) => {
        e.preventDefault()
        const requiredFields = [Nombre, Apellido, Direccion, Telefono, Correo, HistorialMedico];
        if (requiredFields.some((field) => !field)) {
            alert('Por favor, complete todos los campos');
            return;
        }
        const _paciente = await editarPaciente(params.id, {
            paciente_nombre: Nombre,
            paciente_apellido: Apellido,
            paciente_direccion: Direccion,
            paciente_email: Correo,
            paciente_numeroContacto: Telefono,
            paciente_historialMedico: HistorialMedico
        })
        router.push('/pacientes')
    }
    return (
        <div className="container">
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h3 className="text-center">Editar paciente</h3>
                <div className='card-body'>
                    <form onSubmit={guardarDatos}>
                        <div className="mb-3">
                            <label>Nombre</label>
                            <input type="text" className="form-control" value={Nombre} onChange={(e) => setNombre(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label>Apellido</label>
                            <input type="text" className="form-control" value={Apellido} onChange={(e) => setApellido(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label>Dirección</label>
                            <input type="text" className="form-control" value={Direccion} onChange={(e) => setDireccion(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label>Teléfono</label>
                            <input type="text" className="form-control" value={Telefono} onChange={(e) => setTelefono(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label>Correo</label>
                            <input type="text" className="form-control" value={Correo} onChange={(e) => setCorreo(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label>Historial Medico</label>
                            <input type="text" className="form-control" value={HistorialMedico} onChange={(e) => setHistorialMedico(e.target.value)} />
                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                            <button type="submit" className="btn btn-success">Guardar</button>
                            <button type="button" onClick={() => router.push('/pacientes')} className="btn btn-dark">Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Editarpacientes