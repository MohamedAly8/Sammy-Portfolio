import "./contact.css"
import { useRef } from "react";

function Contact() {

    const formRef = useRef()

    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    return (
        
        <div className="c">

        <hr></hr>     
        {/* <div className="c-bg"></div> */}

        <div className="contact-box">



            <div className="c-title">
            Contact Me
        </div>

        <form ref={formRef} onSubmit={ handleSubmit }>      
        <input name="user_name" type="text" className="name" placeholder="Name" />   
        <input name="email" type="email" className="email" placeholder="Email" />
        <input name="user_subject" type="text" className="user_subject" placeholder="Subject" />
        <textarea rows="5" name="text" className="message" placeholder="Message"></textarea>
        <button className="submit">Submit</button>
        </form>


        </div>
                    
        </div>


    )
}

export default Contact
