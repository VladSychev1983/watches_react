import React, { useState } from 'react'
import './App.css'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)
  return (
    <React.Fragment>
      <div>components here.</div>
      <Form />
    </React.Fragment>
  )
}

export default App
