import React, { useState, useEffect } from 'react'

import logo from './logo.svg'
import './App.css'
import Form from './Form2'
import Notas from './Notas3'
import Importantes from './Importantes'
import Service from './Services'
import NotasContext from './Contexto'

const App = ({ notas }) => {
  const [notes, setNotes] = useState(notas)
  const [newNote, setNewNote] = useState({
    content: 'Nueva nota',
    important: false
  })

  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    Service.getAll().then(response => {
      setNotes(response.data)
    })
  }

  useEffect(hook, [])
  const addNote = noteObject => {
    if (!noteObject.id) {
      Service.create(noteObject).then(response => {
        setNotes(notes.concat(response.data))
      })
    } else {
      Service.update(noteObject.id, noteObject).then(response => {
        setNotes(
          notes.map(note => (note.id !== noteObject.id ? note : response.data))
        )
      })
    }

    setNewNote({ content: '', important: false })
  }
  const toggleImportance = id => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
    Service.update(id, changedNote).then(response => {
      setNotes(notes.map(note => (note.id !== id ? note : response.data)))
    })
  }
  const editNota = id => {
    const note = notes.find(n => n.id === id)

    setNewNote(note)
  }
  const notesToShow = showAll ? notes : notes.filter(note => note.important)
  return (
    <div id='container'>
      <NotasContext.Provider value={{ showAll, toggleImportance, editNota }}>
        <h1>Notas</h1>
        <Importantes setShowAll={setShowAll} showAll={showAll} />
        <Form addNote={addNote} newNote={newNote} setNewNote={setNewNote} />
        <Notas notas={notesToShow} />
      </NotasContext.Provider>
    </div>
  )
}

export default App
