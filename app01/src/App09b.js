import React, { useState, useEffect } from 'react'

import logo from './logo.svg'
import './App.css'
import Form from './Form'
import Notas from './Notas2'
import Importantes from './Importantes'
import Service from './Services'

const App = ({ notas }) => {
  const [notes, setNotes] = useState(notas)
  const [showAll, setShowAll] = useState(true)
  const [newNote, setNewNote] = useState('nueva nota...')
  const hook = () => {
    Service.getAll().then(response => {
      console.log('promise fulfilled')
      setNotes(response.data)
    })
  }

  useEffect(hook, [])
  const addNote = noteObject => {
    Service.create(noteObject).then(response => {
      console.log(response)
      setNotes(notes.concat(response.data))
      setNewNote('')
    })
  }
  const toggleImportance = id => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
    Service.update(id, changedNote).then(response => {
      setNotes(notes.map(note => (note.id !== id ? note : response.data)))
    })
  }
  const notesToShow = showAll ? notes : notes.filter(note => note.important)
  return (
    <div id='container'>
      <h1>Notas</h1>
      <Importantes setShowAll={setShowAll} showAll={showAll} />
      <Form addNote={addNote} />

      <Notas notas={notesToShow} showAll={showAll} toggle={toggleImportance} />
    </div>
  )
}

export default App
