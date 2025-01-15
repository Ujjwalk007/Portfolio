import './projects.css'
import agni from './logonew.jpg'
import anpr from './anpr.jpeg'
import port from './port.png'


function Projects()
{




    return (
    
        <div id='projects' className="proj">

        <center>
        <label style={{fontWeight:'bold',marginBottom:'5vh'}}>Projects </label>
        </center>

            <div className='projects'>

                    {/* <div className="project">
                        <center>
                        <label style={{fontStyle:'bold',fontSize:'3vh'}}>Agnivesha: Personalized Ayurvedic HealthCare</label>
                        </center>
                        <br/>
                        <p>
                        Agnivesha integrates ancient Ayurvedic principles with cutting-edge machine learning technology to provide personalized herbal medicine recommendations, 
                        benefiting clients with holistic and tailored healthcare solutions. <br/>
                        This innovative approach ensures improved well-being by addressing individual attributes 
                        like age, Prakruti, and health background. <br/>

                        <br/><label style={{fontStyle:'bold',textDecoration:'underline'}}>Tech Stack:</label>
                         Python 3.0, XGBoost, Scikit-Learn Library, Jupyter Notebook, Figma, React.js, Node.js, Flask
                        </p>
                    </div>

                    <div className="project">
                        <center>
                        <label style={{fontStyle:'bold',fontSize:'3vh'}}>Specific Vehicle Detection and Alert System</label>
                        </center>
                        <br/>
                        <p>
                        The proposed technology is designed to identify specific types of vehicles, such as ambulances and firetrucks, and notify
                        nearby relevant authorities like RTO officers for better coordination. <br/>
                        This system comprises a processing unit (computer or high-spec microcontroller), cameras for footage capture, and a
                        database of number plates for vehicle recognition.<br/>

                        <br/><label style={{fontStyle:'bold',textDecoration:'underline'}}>Tech Stack:</label>
                        OpenCV (Computer Vision Library), OCR (Optical Character Recognition), Python-3, Noise Removal
                        Techniques
                        </p>
                    </div>


                    <div className="project">
                            <center>
                                <label style={{ fontStyle: 'bold', fontSize: '3vh' }}>Portfolio Website</label>
                            </center>
                            <br/> <br/>
                            <p>
                                A personal portfolio website designed to showcase projects, skills, and achievements in a clean and professional layout. <br/> 
                                It includes interactive sections for users to explore projects, download resumes, and contact directly.  <br/>
                                
                                It serves as a platform to highlight expertise, creativity, and technical capabilities effectively.
                                <br />
                                <br/><label style={{ fontStyle: 'bold', textDecoration: 'underline' }}>Tech Stack:</label> React.js, Bootstrap, CSS
                            </p>
                    </div> */}

                    <div className='nprojects'>

                        <div className='nproject'>

                            <div className='pleft'>
                                <img src={agni} alt='Agnivesh Logo' style={{height:'30vh',width:'50vh',borderRadius:'2vh',margin:'2vh'}}></img>
                                <div style={{fontSize:'2.5vh',width:'50vh',margin:'2vh'}}>
                                <u><b>Tech Stack:</b></u> Python 3.0, XGBoost, Scikit-Learn Library, JupyterNotebook, Figma,React.js, Node.js, Flask
                                </div>
                            </div>

                            <div className='pright'>
                                <center>
                                <label style={{fontFamily:'Outfit',fontWeight:'bold',fontSize:'4vh',marginBottom:'2vh'}}>Agnivesha: Personalized Ayurvedic HealthCare</label>
                                </center>
                            ● Agnivesha integrates ancient Ayurvedic principles with cutting-edge machine learning technology to provide personalized herbal medicine recommendations, 
                                benefiting clients with holistic and tailored healthcare solutions. <br/><br/>
                            ● This innovative approach ensures improved well-being by addressing individual attributes 
                                like age, Prakruti, and health background. <br/>

                            </div>


                        </div>

                        <div className='nproject'>

                            <div className='pleft'>
                                <img src={anpr} alt='Agnivesh Logo' style={{height:'30vh',width:'50vh',borderRadius:'2vh',margin:'2vh'}}></img>
                                <div style={{fontSize:'2.5vh',width:'50vh',margin:'0 2vh 0 2vh'}}>
                                <b><u>Tech Stack</u></b>: OpenCV (Computer Vision Library), OCR (Optical Character Recognition), Python-3, Noise Removal
                                Techniques
                                </div>
                            </div>

                            <div className='pright'>
                                <center>
                                <label style={{fontFamily:'Outfit',fontWeight:'bold',fontSize:'4vh',marginBottom:'2vh'}}> Specific Vehicle Detection and Alert System</label>
                                </center>
                                ● The proposed technology is designed to identify specific types of vehicles, such as ambulances and firetrucks, and notify
                                nearby relevant authorities like RTO officers for better coordination. <br/><br/>
                                ● This system comprises a processing unit (computer or high-spec microcontroller), cameras for footage capture, and a
                                database of number plates for vehicle recognition.

                            </div>

                        </div>


                        

                        

                            <div className='nproject'>

                            <div className='pleft'>
                                <img src={port} alt='Portfolio Website' style={{height:'30vh',width:'50vh',borderRadius:'2vh',margin:'2vh'}}></img>
                                <div style={{fontSize:'2.5vh',width:'50vh',margin:'0 2vh 0 2vh'}}>
                                <b><u>Tech Stack:</u></b> React.js, Bootstrap, CSS
                                </div>
                            </div>

                            <div className='pright'>
                                <center>
                                <label style={{fontFamily:'Outfit',fontWeight:'bold',fontSize:'4vh',marginBottom:'2vh'}}> Portfolio Website</label>
                                </center>
                                ● Apersonal portfolio website designed to showcase projects, skills, and achievements in a clean and professional layout. It
                                  includes interactive sections for users to explore projects, download resumes, and contact directly. <br/><br/>
                                ● It serves as a dynamic platform to highlight expertise, creativity, and technical capabilities effectively

                            </div>


                        </div>





                    </div>


                </div>


        </div>

    
    
    
    
    
    )
}

export default Projects;