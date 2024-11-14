import React, { useState } from 'react'
import Header from './Components/Layout/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <Header/>
    </React.Fragment>
  )
}

export default App
