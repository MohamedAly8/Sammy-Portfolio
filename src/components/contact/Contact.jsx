import "./contact.css"
import { useRef , useState } from "react";
import emailjs from '@emailjs/browser';

function Contact() {

    const formRef = useRef();
    const [done, setDone] = useState(false);

    const Style = { color: 'red'};
    const thanks_message = <p style={ Style}>Thank you for your email, I will respond shortly</p>


    const handleSubmit = (e)=>{
        e.preventDefault()

        // For use with EmailJS
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_USER_ID')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
            
        });
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
        {done && thanks_message}
        
        </form>

        </div>
                    
        </div>


    )
}

export default Contact
