import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MatchComponent from './components/matchComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MatchComponent />
      Hello
    </div>
  )
}

export default App
