import React, { useState } from 'react'

import logo from './logo.svg'
import './App.css'

const Form = ({ addNote }) => {
  const [newNote, setNewNote] = useState('nueva nota...')
  const [important, setImportant] = useState(true)
  const handleSubmit = event => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: important
    }

    addNote(noteObject)
    setNewNote('')
  }
  const handleNoteChange = event => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input value={newNote} onChange={handleNoteChange} />
      <input
        type='checkbox'
        name='important'
        checked={important}
        onChange={() => setImportant(!important)}
      />

      <button type='submit'>Guardar</button>
    </form>
  )
}

export default Form
