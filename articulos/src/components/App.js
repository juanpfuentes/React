import React from 'react'
import List from './List'
import Form from './Form'

const App = () => (
  <>
    <div>
      <h2>Artículos</h2>
      <List />
    </div>
    <div>
      <h2>Añadir artículo</h2>
      <Form />
    </div>
  </>
)

export default App
