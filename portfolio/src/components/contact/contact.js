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

            <div style={{marginTop:'10vh',marginRight:'30vh'}}>
                <img src={mail} style={{height:'5vh',width:'5vh'}}></img>
                <a href='mailto:ujjwalkulkarni6@gmail.com' style={{marginLeft:'1vh',color:'white',textDecoration:'none'}}>ujjwalkulkarni6@gmail.com</a>
            </div>

            <div style={{marginTop:'5vh',marginRight:'30vh'}}>
                <img src={linkedin} style={{height:'5vh',width:'5vh'}}></img>
                <a href='https://www.linkedin.com/in/ujjwal-kulkarni/' style={{marginLeft:'1vh',color:'white',textDecoration:'none'}}>linkedIn</a>
            </div>

            <div style={{marginTop:'5vh',marginRight:'30vh'}}>
                <img src={github} style={{height:'5vh',width:'5vh',background:'white'}}></img>
                <a href='https://github.com/Ujjwalk007' style={{marginLeft:'1vh',color:'white',textDecoration:'none'}}>Github</a>
            </div>


        </div>



    </div>
    
    
    
    </>)
}

export default Contact;