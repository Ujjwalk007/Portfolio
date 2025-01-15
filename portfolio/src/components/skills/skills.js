
import './skills.css'

import c from './logos/c.png'
import cpp from './logos/c++.png'
import python from './logos/python.png' 
import mysql from './logos/mysql.png'
import dsa from './logos/dsa.png'
import java from './logos/java.png'
import ml from './logos/ml.png'
import tf from './logos/tf.png'
import react from './logos/React.png'
import node from './logos/node.png'
import linux from './logos/linux.png'
import cuda from './logos/cuda.png'
import mongodb from './logos/mongodb.png'
import vs from './logos/vs.png'

function Skills()
{


    return (<>
    
        <div  id='skills' className='skill'>


            <center>
                <label className='title'>
                    My Strengths
                </label>
            </center>
            <br/>
            

            <div className='sections'>

                
                <div className='section'>
                    <center>
                        <label style={{fontSize:'5vh',
                            fontFamily:'Outfit',
                            fontWeight:'bold',
                            color:'white',
                            marginBottom:'5vh',
                            textDecoration:'underline'
                            }}>
                        Programming <br/> Languages 
                        </label>
                    
                    
                    <div className='subsection'>
                        <img src={c} style={{marginRight:'8vh'}} alt='c'></img>
                        <img src={cpp}  alt='cpp'></img>
                    </div>

                    <div className='subsection'>
                        <img src={python} style={{marginRight:'8vh'}} alt='python'></img>
                        <img src={java}  alt='java'></img>
                    </div>

                    </center>
                    
                </div>

                <div className='section'>
                    <center>
                        <label style={{fontSize:'5vh',
                            fontFamily:'Outfit',
                            fontWeight:'bold',
                            color:'white',
                            marginBottom:'5vh',
                            textDecoration:'underline'
                            }}>
                        Frameworks <br/>And Applied Skills
                        </label>
                    
                    
                    <div className='subsection'>
                        <img src={ml} style={{marginRight:'8vh'}} alt='ml'></img>
                        <img src={tf}  alt='tf'></img>
                    </div>

                    <div className='subsection'>
                        <img src={react} style={{marginRight:'8vh'}} alt='react'></img>
                        <img src={node}  alt='node'></img>
                    </div>

                    <div className='subsection'>
                        <img src={dsa} style={{marginRight:'8vh'}} alt='dsa'></img>
                        <img src={cuda}  alt='CUDA'></img>
                    </div>

                    </center>
                    
                </div>


                <div className='section'>
                    <center>
                        <label style={{fontSize:'5vh',
                            fontFamily:'Outfit',
                            fontWeight:'bold',
                            color:'white',
                            marginBottom:'5vh',
                            textDecoration:'underline'
                            }}>
                        DataBases <br/>And Tools
                        </label>
                    
                    
                    <div className='subsection'>
                        <img src={mysql} style={{marginRight:'8vh'}} alt='MySQL'></img>
                        <img src={mongodb}  alt='mongodb'></img>
                    </div>

                    <div className='subsection'>
                        <img src={linux} style={{marginRight:'8vh'}} alt='react'></img>
                        <img src={vs}  alt='VS Code'></img>
                    </div>

                    

                    </center>
                    
                </div>








                



            </div>




        </div>
    
    
    
    
    
    </>)
}



export default Skills;