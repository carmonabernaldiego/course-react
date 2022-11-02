import { useState } from 'react'
import './App.css'
import RickandMorty from './components/RickandMorty'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RickandMorty/>
    </>
  )
}

export default App
