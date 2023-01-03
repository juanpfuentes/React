import React, { useState } from 'react'

import './App.css'

const Form = ({ addNote, newNote, setNewNote }) => {
  const handleSubmit = event => {
    event.preventDefault()
    const noteObject = {
      id: newNote.id,
      content: newNote.content,
      date: new Date().toISOString(),
      important: newNote.important
    }

    addNote(noteObject)
  }
  const handleNoteChange = event => {
    const name = event.target.id
    const value = event.target.value
    setNewNote({
      ...newNote,
      [name]: name === 'important' ? !newNote.important : value
    })
    console.log(newNote)
  }
  return (
    <form onSubmit={handleSubmit} id='formNote'>
      <div>
        <label htmlFor='newNote'>Nota: </label>
        <input
          id='content'
          value={newNote.content}
          onChange={handleNoteChange}
          placeholder='Introduzca nota'
        />
      </div>
      <div>
        <label htmlFor='important'>¿Es importante?: </label>
        <input
          type='checkbox'
          id='important'
          checked={newNote.important}
          onChange={handleNoteChange}
        />
      </div>
      <button type='submit'>Guardar</button>
    </form>
  )
}

export default Form
