import {useEffect} from 'react'
import './header.css'
import HeaderImage from '../../assets/header.jpg'
import data from './data.js'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Header = () => {

  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])
  
  return (
    <header id="header">
      <div className="container header_container">
        <div className="header_profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portrait" />
        </div>
        <h3 data-aos="fade-up">Kitwana Akil</h3>
        <p data-aos="fade-up">
          You are a click away from building your dream website or web app.  Send me the details of your project for a modern, mobile responsive, highly performant website today!
        </p>
        <div className="header_cta" data-aos="fade-up">
          <a href="#contact" className="btn primary">Let's Talk</a>
          <a href="#portfolio" className="btn light">My Work</a>
        </div>
        <div className="header_socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header