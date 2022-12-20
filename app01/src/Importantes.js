import React from 'react'

import './App.css'
const Importantes = ({ setShowAll, showAll }) => (
  <div>
    <button onClick={() => setShowAll(!showAll)}>
      Ver {showAll ? 'importantes' : 'todas'}
    </button>
  </div>
)

export default Importantes
