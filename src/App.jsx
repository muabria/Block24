import { useState } from 'react'
import {puppyList} from './data.js'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div></div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
     
    </>
  )
}

export default App
