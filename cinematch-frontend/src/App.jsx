import { useState } from 'react'
import './App.css'
import MatchComponent from './components/matchComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <MatchComponent />
    </div>
  )
}

export default App
