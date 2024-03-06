import React from 'react'
import './main.scss'
import Authen from './pages/authen/Authen'
import Home from './pages/home/Home'
import UserToggle from './pages/home/components/header/components/UserToggle'
import ChatBox from './components/chatbox/Chatbox'
import Account from './pages/account/Account'

export default function App() {
  return (
    <div>
      {/* <Authen /> */}
      {/* <Home /> */}
      {/* <ChatBox /> */}
      {/* <UserToggle /> */}
      <Account />
    </div>
  )
}
