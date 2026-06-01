import { useState } from 'react'
import './Home.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Mon super portfolio (il est incroyable)</h1>
      <p>Saucisse</p>
      <span>normalement ce texte il est pas rouge</span>
    </>
  )
}

export default Home
