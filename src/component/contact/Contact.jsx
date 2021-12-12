import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import { useContext, useRef, useState } from "react"
import { ThemeContext } from "../../context"
import emailjs from "emailjs-com"
const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    const handleSubmit = (e) => {
      e.preventDefault()
      emailjs.sendForm(
        process.env.REACT_APP_SERVICE_KEY,
        process.env.REACT_APP_TEMPLATE_KEY,
        formRef.current, 
        process.env.REACT_APP_USER_KEY)
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    }
    return (
      <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Let's discuss your project</h1>
            <div className="c-info">
              <div className="c-info-item">
                <img src={Phone} alt="" className="c-icon" />
                + 080 1234 5678
              </div>
              <div className="c-info-item">
                <img src={Email} alt="" className="c-icon" />
                hoge@gmail.com
              </div>
            </div>
              <div className="c-info-item">
                <img src={Address} alt="" className="c-icon" />
                245 king street
              </div>
          </div>
          <div className="c-right">
            <p className="c-desc">
              <b>What's your story?</b> Get in touch. Always
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input type="text" style={{backgroundColor: darkMode && "#333"}} placeholder="Name" name="user_name"/>
              <input type="text" style={{backgroundColor: darkMode && "#333"}} placeholder="Subject" name="user_subject"/>
              <input type="text" style={{backgroundColor: darkMode && "#333"}} placeholder="email" name="user_email"/>
              <textarea name="message" style={{backgroundColor: darkMode && "#333"}} placeholder="message" rows="5"></textarea>
              <button>Submit</button>
              { done && "Thank You!" }
            </form>
          </div>
        </div>
      </div>
    );
}

export default Contact;