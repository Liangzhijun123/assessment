import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Component/Nav'
import Home from './Component/Home'
import Profile from './Component/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
        <Nav/>
        <Home/>
        <Profile/>
     </div>
    </>
  )
}

export default App
