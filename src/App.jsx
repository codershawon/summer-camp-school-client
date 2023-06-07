import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <h1 className='text-cyan-700'>This is app</h1>
   <button style={{backgroundColor:"#68a699"}} className="btn text-white">Info</button>
    </>
  )
}

export default App
