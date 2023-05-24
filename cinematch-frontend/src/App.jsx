import { useState } from 'react'
import './App.css'
import MatchComponent from './components/matchComponent'
import Home from './views/Home'
import Sidenav from './components/Sidenav'

function App() {
  return (
    <div className="container">
      {/* <MatchComponent /> */}
      < Home />
      < Sidenav />
    </div>
  )
}

export default App
