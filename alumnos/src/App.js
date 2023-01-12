import React, { useState, useEffect, useRef } from 'react'

import './App.css'
import Alumnos from './components/Alumnos'
import Service from './components/Services'
import Modal from './components/Modal'
import Contexto from './components/Contexto'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
const App = () => {
  const [alumnos, setAlumnos] = useState([])
  const [show, setShow] = useState(false)
  const [titulo, setTitulo] = useState('Nuevo alumno')
  const [nuevoAlumno, setNuevoAlumno] = useState({
    nombre: '',
    email: '',
    nota: 0
  })
  const cabecera = useRef(null)
  const hook = () => {
    Service.getAll().then(response => {
      setAlumnos(response.data)
    })
  }

  useEffect(hook, [])
  const addAlumno = alumno => {
    if (!alumno.id) {
      Service.create(alumno).then(response => {
        setAlumnos(alumnos.concat(response.data))
      })
    } else {
      Service.update(alumno.id, alumno).then(response => {
        setAlumnos(
          alumnos.map(note => (note.id !== alumno.id ? note : response.data))
        )
      })
    }

    setNuevoAlumno({ nombre: '', email: '', nota: 0 })
    cabecera.current.innerHTML = 'Un nuevo alumno ¡Bote!'
  }

  const editAlumno = id => {
    const alumno = alumnos.find(n => n.id === id)

    setNuevoAlumno(alumno)
    setTitulo('Editar alumno')
    setShow(true)
  }

  const deleteAlumno = id => {
    Service.del(id).then(response => {
      setAlumnos(alumnos.filter(al => al.id != id))
    })
  }
  const modalNuevoAlumno = () => {
    setTitulo('Nuevo alumno')
    setShow(true)
  }
  const onClick = response => {
    if (response.result) {
      addAlumno(nuevoAlumno)
    }
    setShow(false)
  }
  //const notesToShow = showAll ? notes : notes.filter(note => note.important)
  return (
    <div id='container'>
      <Contexto.Provider
        value={{ editAlumno, deleteAlumno, nuevoAlumno, setNuevoAlumno }}
      >
        <h1 ref={cabecera}>Alumnos</h1>
        <Modal show={show} titulo={titulo} onClick={onClick} />
        <Button variant='outline-primary' onClick={modalNuevoAlumno}>
          Nuevo Alumno
        </Button>
        <Alumnos alumnos={alumnos} />
      </Contexto.Provider>
    </div>
  )
}

export default App
