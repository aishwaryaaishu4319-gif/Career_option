import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './styles/index.css'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Landing from './pages/Landing'

function App(){
  const token = localStorage.getItem('token')
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={token ? <Profile/> : <Navigate to="/login" />} />
        <Route path="/dashboard" element={token ? <Dashboard/> : <Navigate to="/login" />} />
        <Route path="/" element={token ? <Navigate to="/dashboard" /> : <Landing/>} />
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(<App />)
