import React from "react";
import { FaReact } from "react-icons/fa6";
import css from './Header.module.css'

const Header = () => {
  return (
    <>
    <header> 
      <div className={css.header}>
        <h1><FaReact className={css.logo} />GoIT-React-hw-01</h1>
      </div>
     </header>
     </>
  )
}

export default Header