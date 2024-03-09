'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { crearPacientes } from '@/lib/pacientes.axios'

const CrearPacientes = () => {
    const router = useRouter()
    const [Nombre, setNombre] = useState('')
    const [Apellido, setApellido] = useState('')
    const [Direccion, setDireccion] = useState('')
    const [Telefono, setTelefono] = useState('')
    const [Correo, setCorreo] = useState('')
    const [HistorialMedico, setHistorialMedico] = useState('')

    const guardarDatos = async (e) => {
        e.preventDefault()
        const requiredFields = [Nombre, Apellido, Direccion, Telefono, Correo, HistorialMedico];
        if (requiredFields.some((field) => !field)) {
            alert('Por favor, complete todos los campos');
            return;
        }
        const _paciente = await crearPacientes({ // Crear un paciente a través de la función importada
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
                <h3 className="text-center">Crear paciente</h3>
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
export default CrearPacientes

