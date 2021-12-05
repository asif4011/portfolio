
import './App.css';
import Header from './Header.js';
import About from './about';
import Typewriter from 'typewriter-effect';
import Contact from './contact';

function App() {
  document.title = "Asif's Portfolio"
  
  const typing=()=>{
    return (
        
        <Typewriter options={{
          loop:true,
        }}
          onInit={(typewriter)=>{
            typewriter.typeString("Full Stack Developer")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Backend Developer")
            .start();
          }}
        
        />
      )
  }
  return (
    
    <div id="home">
      <title>Asif's Portfolio</title>
      <div className="container">
      <Header />
        <div className="container-item container-item1">
              <h2 className="greet">I'm <bold>Asif</bold></h2>
              <h2 className="designation">{typing()}</h2>
        </div>
      </div>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
