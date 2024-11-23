import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Home'
import Dashboard from './Dashboard'
import Login from './Login'
import Signup from './Signup'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route  path='/dashboard' element={<Dashboard/>}/>
      <Route path='/signup' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
    </Router>
  </StrictMode>,
)
