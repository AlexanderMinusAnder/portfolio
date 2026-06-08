import './Navbar.css'
import menu from "../../assets/menu.png"
import menuSelected from "../../assets/menu-selected.png"
import { useState } from 'react'

function Navbar() {

  const [selected, setSelected] = useState(false)
  const [menuIcon, setMenuIcon] = useState(menu)
  const [menuStyle, setMenuStyle] = useState('flex')

  const handleSelected = () => {
    setSelected(previous => !previous)
    if(selected && window.screen.width < 430) {
      setMenuIcon(menuSelected)
      setMenuStyle('none')
    } else {
      setMenuIcon(menu)
      setMenuStyle('flex')
    }
  }

  return (
    <div id='navbar'>
      <div id='title'>
        <h1>Alex SOUSSI</h1>
        <p>Concepteur Développeur d'Applications</p>
      </div>
      <div id='menu'>
        <ul style={{display: menuStyle}}>
          <li>Mon parcours</li>
          <li>Mes projets</li>
          <li><a href='https://www.linkedin.com/in/alex-soussi-027aa62b3/' target='_blank'>LinkedIn</a></li>
          <li>Contacts</li>
        </ul>
        <img src={menuIcon} onClick={handleSelected} id='burger-menu'></img>
      </div>
    </div>
  )
}

export default Navbar
