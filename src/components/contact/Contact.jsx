import "./contact.scss"
import {useState, useEffect} from 'react';
import { SocialIcon } from 'react-social-icons';
import emailjs from 'emailjs-com'


export default function Contact() {

    const [message, setMessage] = useState(false)

    const handleSubmit = (e)=> {
        e.preventDefault();
        setMessage(true);
        
        emailjs.sendForm('service_spnschl', 'template_5rgn5g3', e.target, 'user_UVGXcXfUxvc5mpyeiDdvc')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }

    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    let isMobile = (width <= 786);

 
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt=""/>
            </div>

            <div className="right">
                <h2>Get In Touch.</h2>
            
               
                <div className="socialIcons">
       
                    {isMobile ? (
                        <>
                            <SocialIcon url="https://www.linkedin.com/in/joe-kadi/" className="socialIcon" bgColor="#dc143c" style={{ height: 35, width: 35 }}/> 
                            <SocialIcon url="https://joekadi.medium.com/" className="socialIcon" bgColor="#dc143c" style={{ height: 35, width: 35 }}/>
                            <SocialIcon url="https://github.com/joekadi" className="socialIcon" bgColor="#dc143c" style={{ height: 35, width: 35 }}/>
                            <SocialIcon url="https://twitter.com/joekadi" className="socialIcon" bgColor="#dc143c" style={{ height: 35, width: 35 }}/> 
                        </>
                    ) : (
                        <>
                            <SocialIcon url="https://www.linkedin.com/in/joe-kadi/" className="socialIcon" bgColor="#dc143c"/> 
                            <SocialIcon url="https://joekadi.medium.com/" className="socialIcon" bgColor="#dc143c"/>
                            <SocialIcon url="https://github.com/joekadi" className="socialIcon" bgColor="#dc143c"/>
                            <SocialIcon url="https://twitter.com/joekadi" className="socialIcon" bgColor="#dc143c"/> 
                        </>
                    )}
                           
                </div>

                <form onSubmit={handleSubmit}>
                    <input type = "text" placeholder="Email" name="email"/>
                    <textarea placeholder="Message" name="message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I'll reply ASAP :) </span>}
                </form>
            </div>

        </div>
    )
}
