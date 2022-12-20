import React, { useState } from 'react'

import logo from './logo.svg'
import './App.css'

const Nota = ({ nota, important }) => (
  <li>
    {nota} {important ? '✓' : ''}
  </li>
)

const App = ({ notas }) => {
  const [notes, setNotes] = useState(notas)
  const [newNote, setNewNote] = useState('nueva nota...')
  const [important, setImportant] = useState(true)
  const [showAll, setShowAll] = useState(true)
  const addNote = event => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: important,
      id: notes.length + 1
    }

    setNotes(notes.concat(noteObject))
    setNewNote('')
  }
  const handleNoteChange = event => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }
  const notesToShow = showAll ? notes : notes.filter(note => note.important)
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
          <Nota key={note.id} nota={note.content} important={note.important} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <input
          type='checkbox'
          name='important'
          checked={important}
          onChange={() => setImportant(!important)}
        />
        <button type='submit'>save</button>
      </form>
    </div>
  )
}

export default App
