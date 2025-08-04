import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Paragraph } from './pages/Paragraph'
import { Iphone } from './pages/Iphone'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
      <Landing></Landing>
         <Paragraph/>
         <Iphone/>    
         
      </div>
      
    </>
  )
}

export default App
