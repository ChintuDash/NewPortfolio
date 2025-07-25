
import React, { useEffect } from 'react';

import {Typewriter} from 'react-simple-typewriter';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Home = ()=>{  
    
    useEffect(() => { 
    const preloadMsg = new SpeechSynthesisUtterance('');
    window.speechSynthesis.speak(preloadMsg);
    }, []);
    
   window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
};
    const speakIcon = (text) =>{
        const msg= new SpeechSynthesisUtterance(text);
        msg.volume=0.7;
        msg.rate=1;
        msg.pitch=1;
        window.speechSynthesis.speak(msg);
    }
   
    return(
      <div className="container-fluid">
        <div className="container home-box">
            <div className="row home-content-box">
                <div className="col-lg-5">
                    <div className="profile-img-box">
                        <div className="profile-img">
                             <img src="/images/profile.jpg" alt="" className="img-fluid"/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                   <div className="profile-text">
                        <h1>Chintu Dash</h1>
                        <h2>I'm a, {' '}
                            <span>
                                <Typewriter
                                    words={['Full Stack Engineer','Web App Developer','React Developer']}
                                    loop={0}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                            
                        </h2>
                        <p>"I'm Chintu, a passionate full stack web developer skilled in building responsive websites, APIs, and dynamic user experiences."</p>
                        <div className="media-box">
                            <a href="https://www.linkedin.com/in/chintu-dash-851060314/" target="_blank" rel="noopener noreferrer" className="px-3 ms-2 icon-link"><FaLinkedin  className='icon linkedin' onMouseEnter={()=> speakIcon("visit my linkedin profile")}/></a>
                            <a href="https://github.com/ChintuDash " target="_blank" rel="noopener noreferrer" className=" icon-link"><FaGithub className='icon github' onMouseEnter={()=> speakIcon("visit my github profile")}/></a>
                            <a href="https://www.facebook.com/dashchintu.dash/" target="_blank" rel="noopener noreferrer" className="px-3 ms-2 icon-link"><FaFacebook  className='icon facebook' onMouseEnter={()=> speakIcon("visit my facebook profile")}/></a>
                            <a href="https://www.instagram.com/chintu___dash/" target="_blank" rel="noopener noreferrer" className="px-3 ms-2 icon-link"><FaInstagram  className='icon instagram' onMouseEnter={()=> speakIcon("visit my instagram profile")}/></a>
                        </div>
                   </div>
                </div>
            </div>
         
        </div>
      </div>
    )
}
export default Home;