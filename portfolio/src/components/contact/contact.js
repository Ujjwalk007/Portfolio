import './contact.css'

import mail from './gmail.png'
import linkedin from './linkedin.png'
import github from './github.png'

function Contact()
{



    return (<>
    
    <div id='contact' className='cont'>

        <div className='left'>

            <label style={{
                color:'white',
                fontFamily:"Outfit",
                fontSize:'5vh',
                marginTop:'15vh',
                fontWeight:'bold'
            }}>
                Contact
            </label> <br/>
            <label style={{
                color:'white',
                fontFamily:"Outfit",
                fontSize:'3vh',
                marginBottom:'15vh'
                
            }}>
                Feel free to Reach out!
            </label>


        </div>

        <div className='right'>

            <div className='contact-row'>
                <img src={mail} className='contact-icon' alt='Email icon'></img>
                <a href='mailto:ujjwalkulkarni6@gmail.com' className='contact-link'>ujjwalkulkarni6@gmail.com</a>
            </div>

            <div className='contact-row'>
                <img src={linkedin} className='contact-icon' alt='LinkedIn icon'></img>
                <a href='https://www.linkedin.com/in/ujjwal-kulkarni/' className='contact-link'>linkedIn</a>
            </div>

            <div className='contact-row'>
                <img src={github} className='contact-icon' style={{background:'white'}} alt='GitHub icon'></img>
                <a href='https://github.com/Ujjwalk007' className='contact-link'>Github</a>
            </div>


        </div>



    </div>
    
    
    
    </>)
}

export default Contact;