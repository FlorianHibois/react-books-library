import { useState } from 'react'
import './App.css'
import Library from './components/Library'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Library/>
    </div>
  )
}

export default App
