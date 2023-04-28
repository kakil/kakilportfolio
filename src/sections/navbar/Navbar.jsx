import Logo from '../../assets/logo.png'
import data from './data'
import {IoIosColorPalette} from 'react-icons/io'
import {useModalContext} from '../../context/modal-context.js';
import './navbar.css'

const Navbar = () => {
  const {showModalHandler} = useModalContext();

  return (
    <nav>
      <div className="container nav_container">
        <a href="index.html" className='nav_logo'>
          <img src={Logo} alt="Logo" />  
        </a>
        <ul className="nav__menu">
          {
            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>
        <button id='theme__icon' onClick={showModalHandler}><IoIosColorPalette/></button>
      </div>
    </nav>
  )
}

export default Navbar