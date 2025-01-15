import './home.css'
import myphoto from './TransparentUK.png'


function Home(){

    const ShowResume = ()=>{
        const path = '/Ujjwal Kulkarni Resume M2 H.pdf'
        window.open(path,'_blank')
    }

    return (<>
    
    <div id='#about'     className="main">

        <div className="left">

            <label className="heading">Hi, I'm Ujjwal</label><br/>
            <label className="text">I'm a Computer Science student <br/>
            passionate about software development and <br/> 
            aspiring to excel in artificial intelligence.
            </label> <br/> <br/>

            <button className='button-29' onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact Me</button>  
            
            <button className='button-29' style={{marginLeft:'3vh'}} onClick={ShowResume}>
                Resume
            </button>



        </div>

        <div className="right">

           <img src={myphoto} className='image' alt='UK_Photo'/>

        </div>






    </div>
    
    
    
    
    
    
    </>)
}

export default Home;