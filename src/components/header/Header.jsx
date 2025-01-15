import { FaReact } from "react-icons/fa6";
import s from './Header.module.css'

const Header = () => {
  return (
    <>
    <header> 
      <div className={s.header}>
        <h2><FaReact className={s.logo} />GoIT+React+hw+02</h2>
      </div>
     </header>
     </>
  )
}

export default Header