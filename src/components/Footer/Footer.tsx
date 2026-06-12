import './Footer.css'
import LinkedIn from "../../assets/LinkedIn.png"
import { useState } from 'react'

function Footer() {

  const [selected, setSelected] = useState(false)
  const [categorySelected, setCategorySelected] = useState(false)

  const handleSelected = (set: React.Dispatch<React.SetStateAction<boolean>>) => {
    set(previous => !previous)
  }

  return (
    <div className='footer'>
      <h1>Mes réseaux</h1>
      <ul>
        <li>Github</li>
        <li>LinkedIn</li>
        <li>Mail</li>
      </ul>
    </div>
  )
}

export default Footer
