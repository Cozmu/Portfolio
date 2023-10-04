import { type ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

function Header (): ReactElement {
  return (
    <header>
      <NavLink
        to="/sobre">
Sobre
      </NavLink>
    </header>
  )
}

export default Header
