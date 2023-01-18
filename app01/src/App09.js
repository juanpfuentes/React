import React, { useState, useEffect } from 'react'
import axios from 'axios'

import logo from './logo.svg'
import './App.css'
import Form from './Form'
import Notas from './Notas2'
import Importantes from './Importantes'

const App = ({ notas }) => {
  const [notes, setNotes] = useState(notas)
  const [showAll, setShowAll] = useState(true)
  const [newNote, setNewNote] = useState('nueva nota...')
  const hook = () => {
    console.log('effect')
    axios.get('http://localhost:3001/notes').then(response => {
      console.log('promise fulfilled')
      setNotes(response.data)
    })
  }

  useEffect(hook, [])
  const addNote = noteObject => {
    setNotes(notes.concat(noteObject))
    setNewNote('')
    axios.post('http://localhost:3001/notes', noteObject).then(response => {
      console.log(response)
    })
  }
  const toggleImportance = id => {
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    axios.put(url, changedNote).then(response => {
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
