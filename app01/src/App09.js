import React, { useState, useEffect } from 'react'
import axios from 'axios'
import logo from './logo.svg'
import './App.css'
import noteService from './notes'

const Nota = ({ nota, toggleImportance }) => {
  const label = nota.important ? 'quitar importancia' : 'hacer importante'

  return (
    <li>
      {nota.content}
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}

const App = ({ notas }) => {
  const [notes, setNotes] = useState(notas)
  const [newNote, setNewNote] = useState('nueva nota...')
  const hook = () => {
    noteService.getAll().then(response => {
      setNotes(response.data)
    })
  }

  useEffect(hook, [])

  const [showAll, setShowAll] = useState(true)
  const addNote = event => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1
    }

    noteService.create(noteObject).then(response => {
      setNotes(notes.concat(response.data))
      setNewNote('')
    })
  }
  const handleNoteChange = event => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }
  const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService.update(id, changedNote).then(response => {
      setNotes(notes.map(note => (note.id !== id ? note : response.data)))
    })
  }
  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)
  return (
    <div>
      <h1>Notas</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          Ver {showAll ? 'importantes' : 'todas'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => (
          <Nota
            key={note.id}
            nota={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type='submit'>save</button>
      </form>
    </div>
  )
}

export default App
