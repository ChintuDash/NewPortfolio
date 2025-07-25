import {NavLink} from 'react-router-dom';

import { useEffect, useRef, useState } from 'react';

function Navbar(){

    // navbar  voice function for fast run 
  const collapseRef = useRef(null);
  const [voicesLoaded, setVoicesLoaded] = useState(false);
  useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        setVoicesLoaded(true);
      }
    };

    loadVoices();  
    window.speechSynthesis.onvoiceschanged = () => {
      loadVoices();
    };
  
    const preloadMsg = new SpeechSynthesisUtterance('');
    window.speechSynthesis.speak(preloadMsg);
  }, []);

  // ✅ navText only runs if voices are loaded
  const navText = (text) => {
    if (!voicesLoaded) {
      console.warn("Voices not loaded yet");
      return;
    }

    const msg = new SpeechSynthesisUtterance(text);
    msg.volume = 0.7;
    msg.rate = 1;
    msg.pitch = 1;
    const voices = window.speechSynthesis.getVoices();
    msg.voice = voices.find((v) => v.lang === "en-US") || voices[0]; 
    window.speechSynthesis.speak(msg);
  };

    // boot strap toggle button close
  const collapseNavbar = () => {
  const collapseElement = collapseRef.current;
  if (collapseElement) {
    const bsCollapse = window.bootstrap.Collapse.getInstance(collapseElement) || new window.bootstrap.Collapse(collapseElement, {
      toggle: false
    });
    bsCollapse.hide();
  }
};

   
    return(             
           
         <nav className="navbar navbar-expand-lg  ms-0 ">
            <div className='container-fluid m-0 '>
               
                    <span className="navbar-brand">CHINTU</span>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbartoggle">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbartoggle" ref={collapseRef}>
                         
                        <ul className='navbar-nav justify-content-between   mx-auto  mb-lg-0 '>
                            <li className='nav-item'>
                               
                                    <NavLink to="/" className='nav-link' onClick={()=>{ navText("Profile"); collapseNavbar();}}
                                        style={({isActive})=>{return{color:isActive ? 'rgb(75,0,130)' :' ',borderBottom:isActive ? '1px solid' : ' '}}}
                                        
                                    >Profile</NavLink>
                                   
                                
                            </li>
                            <li className='nav-item'>
                               
                                <NavLink to="/Tools" className='nav-link' onClick={()=>{ navText("technology"); collapseNavbar();}}
                                    style={({isActive})=>{return{color:isActive ? 'rgb(75,0,130)' :' ',borderBottom:isActive ? '1px solid' : ' '}}}
                                >Technology</NavLink>
                                
                            </li>
                            <li className='nav-item'>

                                <NavLink to="/Project" className='nav-link' onClick={()=>{ navText("project"); collapseNavbar();}}
                                    style={({isActive})=>{return{color:isActive ? 'rgb(75,0,130)' :' ',borderBottom:isActive ? '1px solid' : ' '}}}
                                >Project</NavLink>
                                
                            </li>
                            <li className='nav-item'>
                               
                                <NavLink to="/Contact" className='nav-link' onClick={()=>{ navText("contact"); collapseNavbar();}}
                                    style={({isActive})=>{return{color:isActive ? 'rgb(75,0,130)' :' ',borderBottom:isActive ? '1px solid' : ' '}}}
                                >Contact</NavLink>
                               
                            </li>
                            
                        </ul>
                    
                    </div>                
            </div>
        </nav>
            
        
        
    )
}
export default Navbar;