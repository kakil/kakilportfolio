import { useEffect } from 'react'
import contacts from './data'
import './contact.css'
import AOS from 'aos'

const Contact = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <p>
        You can reach me via any of the links below!
      </p>
      <div className="container contact__container" data-aos="fade-up">
        {
          contacts.map(contact => <a key={contact.id} href={contact.link} target="_blank" rel="noopener noreferrer">{contact.icon}</a>)
        }
      </div>
    </section>
  )
}

export default Contact