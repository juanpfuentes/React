import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App08b';
import axios from 'axios'
import reportWebVitals from './reportWebVitals';
const promise = axios.get('http://localhost:3001/notes')

promise.then(response => {
  console.log(response)
})
const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
]
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App notas={notes} />
  </React.StrictMode>
)

// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
