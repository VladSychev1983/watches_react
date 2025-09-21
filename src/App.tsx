import React, { useState } from 'react'
import './App.css'
import Form from './components/Form'

function App() {
  // добавляем новые часы в состояние.
  const [watchList, watchListAdd] = useState([]);


  return (
    <React.Fragment>
      <div>
      <Form />
      </div>
    </React.Fragment>
  )
}

export default App
