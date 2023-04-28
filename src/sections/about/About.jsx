import './about.css'
import AboutImage from './../../assets/about.jpg'
import CV from './../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import Card from './../../components/Card'
import data from './data.js'

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {
              data.map(item => (
                <Card key={item.id} className="about__card">
                  <span className='about__card-icon'>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div>
          <p>
            Building projects my clients love has always been my passion.  Being in the development industry for over 20 years and serving small businesses and large corporations worldwide.  I continue to be motivated to do my best!
          </p>
          <p>
            Hi, my name is Kitwana Akil.  I'm from Jacksonville, Florida.  I'm a developer who has worked with iOS development, web development, artificial intelligence development, and I'm currently working with blockchain development.  My priority is to get your project up and running as soon as possible, and giving you industry-standard design and all the functionality you need so that your app or web site works the way you want it.  Get in touch today with the details of your project and let's get started!  Check out my resume below!
          </p>
          <a href={CV} download className='btn primary'>Download Resume <HiDownload/></a>
        </div>
      </div>
    </section>
  )
}

export default About