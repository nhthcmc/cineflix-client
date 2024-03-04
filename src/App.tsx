import React from 'react'
import './main.scss'
import Authen from './pages/authen/Authen'
import Home from './pages/home/Home'
import UserToggle from './pages/home/components/header/components/UserToggle'

export default function App() {
  return (
    <div>
      {/* <Authen /> */}
      <Home />
      {/* <UserToggle /> */}
    </div>
  )
}
