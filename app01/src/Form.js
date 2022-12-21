import React, { useState } from 'react'

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
    <form onSubmit={handleSubmit} id='formNote'>
      <div>
        <label for='newNote'>Nota: </label>
        <input
          id='newNote'
          value={newNote}
          onChange={handleNoteChange}
          placeholder='Introduzca nota'
        />
      </div>
      <div>
        <label for='important'>¿Es importante?: </label>
        <input
          type='checkbox'
          id='important'
          checked={important}
          onChange={() => setImportant(!important)}
        />
      </div>
      <button type='submit'>Guardar</button>
    </form>
  )
}

export default Form
