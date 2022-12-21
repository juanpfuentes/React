import React, { useState } from 'react'

import logo from './logo.svg'
import './App.css'
import Form from './Form'
import Notas from './Notas'
import Importantes from './Importantes'

const App = ({ notas }) => {
  const [notes, setNotes] = useState(notas)
  const [showAll, setShowAll] = useState(true)
  const addNote = note => {
    const noteObject = {
      ...note,
      id: notes.length + 1
    }
    setNotes(notes.concat(noteObject))
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important)
  return (
    <div id='container'>
      <h1>Notas</h1>
      <Importantes setShowAll={setShowAll} showAll={showAll} />
      <Form addNote={addNote} />

      <Notas notas={notesToShow} showAll={showAll} />
    </div>
  )
}

export default App
