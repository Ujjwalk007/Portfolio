import './about.css'
import { useState } from 'react'

function About()
{

    const [section,setSection] = useState('education')

    const getTextContent = () => {
        switch (section) {
            case 'education':
                return educationText;
            case 'achievements':
                return achievementsText;
            case 'cocurr':
                return cocurText;
            default:
                return educationText;
        }
    }

    const getLabelStyle = (label) => {
        return section === label ? { boxShadow: '0px 0px 20px 5px rgba(245, 246, 245, 0.6)' } : {};
      };





    const educationText = `<lable style={{fontWeight:'bold',fontSize:'2.5vh'}}>• Graduation: 2021-2025</lable> <br/>
                        <label style={{paddingLeft:'2vh'}}>MIT ADT University        <br/>CGPA:8.88</label><br/><br/>

                        <lable style={{fontWeight:'bold',fontSize:'2.5vh'}}>• Higher Secondary Education: 2020-2021</lable> <br/>
                        <label style={{paddingLeft:'2vh'}}>Rajarshi Shahu College   <br/>Percentage:94.33</label><br/><br/>

                        <lable style={{fontWeight:'bold',fontSize:'2.5vh'}}>• Secondary School Education: 2018-2019</lable> <br/>
                        <label style={{paddingLeft:'2vh'}}>Shri Keshavaraj Vidyalay  <br/>Percentage:99</label><br/><br/>`


    const achievementsText = `<lable style={{fontWeight:'bold',fontSize:'2.5vh'}}>•  NVIDIA Learning’s National KUDATHON (2022)- 2nd Prize Winner</lable> <br/>
    <label style={{paddingLeft:'2vh'}}>Secured 2nd place in NVIDIA Learning's National KUDATHON (2022), <br/>a parallel programming hackathon in CUDA C/C++, winning a cash prize.</label><br/><br/>

    <lable style={{fontWeight:'bold',fontSize:'2.5vh'}}>•   Smart India Hackathon (Internal) Qualified </lable> <br/>
    <label style={{paddingLeft:'2vh'}}>Qualified for the Smart India Hackathon (Internal) as one of the top teams,<br/>selected to represent our college with our innovative idea.</label><br/><br/>`

    const cocurText = `<lable style={{fontWeight:'bold',fontSize:'2.5vh'}}>•   COGNISANCE MIT ADTU — SECRETORY</lable> <br/>
                        <label style={{paddingLeft:'2vh'}}>Managed and conducted the largest college fest event with a ₹1 Lakh prize pool, <br/>leading planning for a 700+ crowd as Management Lead and Secretary.</label><br/><br/>

                        <lable style={{fontWeight:'bold',fontSize:'2.5vh'}}>•    GFG STUDENT CHAPTER MIT — TECHNICAL TEAM MEMBER</lable> <br/>
                        <label style={{paddingLeft:'2vh'}}> Delivered a session as a speaker for the DBMS with MySQL Boot Camp <br/>and conducted doubt-solving sessions on DSA.</label><br/><br/>`

    return (<div>

            <center>
                <label className='title' style={{marginTop:'40vh'}}  id='about'>
                    About Me
                </label>
            </center>

        <div className='about'>

            <div className='about-left'>

            <div className='circle'>
            <label
              className='education'
              style={getLabelStyle('education')}
              onClick={() => setSection('education')}
            >
              Education
            </label>
            <label
              className='achievements'
              style={getLabelStyle('achievements')}
              onClick={() => setSection('achievements')}
            >
              Achievements
            </label>
            <label
              className='cocurriculum'
              style={getLabelStyle('cocurr')}
              onClick={() => setSection('cocurr')}
            >
              Co-curriculum
            </label>
          </div>
        


            </div>

            <div className='about-right'>
                    
                    <div className='button-bar'>

                        <label style={{color:'white',fontFamily:'Outfit',fontSize:'4vh'}}>My </label>
                    

                    <button className='button-19' style={{marginLeft:'2vh'}} onClick={()=>setSection('education')}>
                        Education
                    </button>

                    <button className='button-19' style={{marginLeft:'2vh'}} onClick={()=>setSection('achievements')}>
                        Achievements
                    </button>

                    <button className='button-19' style={{marginLeft:'2vh'}} onClick={()=>setSection('cocurr')}>
                        Co-curriculum Positions
                    </button>

                    </div>

                    <div className='Text' dangerouslySetInnerHTML={{ __html: getTextContent() }}>

                        
                        
                    </div>

            </div>


        </div>
    
    
    </div>)
}

export default About;