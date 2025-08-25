import './home.css'
import myphoto from './TransparentUK.png'


function Home(){

    const ShowResume = ()=>{
        const path = '/Ujjwal Kulkarni Resume M2 H.pdf'
        window.open(path,'_blank')
    }

    return (<>
    
    <div className="container main">

        <div className="row justify-content-center align-items-center g-3">

            <div className="col-12 col-md-6 col-lg-5 left">

                <label className="heading">Hi, I'm Ujjwal</label><br/>
                <label className="text">I'm a Computer Science student <br/>
                passionate about software development and <br/> 
                aspiring to excel in artificial intelligence.
                </label> <br/> <br/>

                <div className='d-flex flex-column flex-sm-row gap-3'>
                    <button className='button-29' onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact Me</button>  
                    <button className='button-29' onClick={ShowResume}>
                        Resume
                    </button>
                </div>

            </div>

            <div className="col-12 col-md-6 col-lg-5 right d-flex justify-content-center">

               <img src={myphoto} className='image' alt='UK_Photo'/>

            </div>

        </div>

    </div>
    
    </>)
}

export default Home;