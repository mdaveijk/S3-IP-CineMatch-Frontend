import Sidenav from './components/Sidenav'
import './App.css'
import Home from './views/Home'
import UserPreferences from './views/UserPreferences'
import PotentialMatches from './views/PotentialMatches'

import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
      <h2 className='logo-text'>CINEMATCH</h2>
      < Sidenav />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/potentialmatches' element={<PotentialMatches />} />
          <Route path='/userpreferences' element={< UserPreferences />} />
        </Routes>
      </div>
    </>
  )
}

export default App
