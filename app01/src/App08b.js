import React, { useState, useEffect } from 'react'
import axios from 'axios'
import logo from './logo.svg'
import './App.css'

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
    console.log('effect')
    axios.get('http://localhost:3001/notes').then(response => {
      console.log('promise fulfilled')
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

    setNotes(notes.concat(noteObject))
    setNewNote('')
    axios.post('http://localhost:3001/notes', noteObject).then(response => {
      console.log(response)
    })
  }
  const handleNoteChange = event => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }
  const toggleImportanceOf = id => {
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    axios.put(url, changedNote).then(response => {
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
