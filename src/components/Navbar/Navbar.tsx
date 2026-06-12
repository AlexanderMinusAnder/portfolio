import './Navbar.css'
import menu from "../../assets/menu.png"
import menuSelected from "../../assets/menu-selected.png"
import LinkedIn from "../../assets/LinkedIn.png"
import { useState } from 'react'

function Navbar() {

  const [selected, setSelected] = useState(false)
  const [categorySelected, setCategorySelected] = useState(false)

  const handleSelected = (set: React.Dispatch<React.SetStateAction<boolean>>) => {
    set(previous => !previous)
  }

  return (
    <div className='nav'>
      <div className='nav__title'>
        <h1>Alex SOUSSI</h1>
        <p>Concepteur Développeur d'Applications</p>
      </div>
      <div className='nav__burger'>
        <img src={selected ? menuSelected : menu} onClick={() => {handleSelected(setSelected)}} className='nav__burger-icon'></img>
      </div>
      <div className={`nav__menu${selected ? "--selected" : ""}`}>
        <ul className='nav__category'>
          <li>Mon parcours</li>
          <li>Mon expérience</li>
          <li>Mes projets</li>
          {/* <li className='nav__category--linkedin'><a href='https://www.linkedin.com/in/alex-soussi-027aa62b3/' target='_blank'><img src={LinkedIn} />LinkedIn</a></li> */}
          <li>Contacts et réseaux</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
