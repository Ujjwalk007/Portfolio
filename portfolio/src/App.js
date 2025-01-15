import './App.css';
import 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Home from './components/home/home';
import About from './components/about/about';


// 1.Add about - Education, Extra Curriculum experiences, Achievements <= DONE
// 2.Project Palet Fix
// 3.Sagrigate SKills (Languages,Frameworks,Databases, Tools)  <= DONE


function App() {
  return (

    
    <div className="App">

      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      
    </div>
  );
}

export default App;
