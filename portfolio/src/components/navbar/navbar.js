



function Navbar()
{



    return(<>
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{borderBottom: '0.5vh black',borderRadius:'0 0 2vh 2vh',background:'linear-gradient(90deg, #4b6cb7 0%, #182848 100%)'}}>
  <div className="container-fluid" >
    <a className="navbar-brand" href="/" style={{ fontSize:'6vh',paddingLeft: "10vh",color:'white',fontWeight:'bold',fontFamily: "'Outfit', sans-serif"}}>
      Portfolio
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto" style={{paddingRight:'10vh',fontFamily: "'Outfit', sans-serif",fontSize:'3vh'}}>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#about" style={{color:'white',fontFamily: "'Outfit', sans-serif"}}>
            About
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#skills" style={{color:'white',fontFamily: "'Outfit', sans-serif"}}>
            Skills
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#projects" style={{color:'white',fontFamily: "'Outfit', sans-serif"}}>
            Projects
          </a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="#contact" style={{color:'white',fontFamily: "'Outfit', sans-serif"}}>
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    
    
    
    
    </>)
}


export default Navbar;