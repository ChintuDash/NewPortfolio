
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { GiClick } from "react-icons/gi";
import { generateWhatsAppLink } from '../utils/utils'; 
// import { useEffect } from "react";
const Project =() =>{

    //     useEffect(() => { 
    //         const preloadMsg = new SpeechSynthesisUtterance('');
    //         window.speechSynthesis.speak(preloadMsg);
    //     }, []);
        
    //  window.speechSynthesis.onvoiceschanged = () => {
    //     window.speechSynthesis.getVoices();
    // };

    const speakbtn = (text)=>{
           window.speechSynthesis.cancel();
            const msg = new SpeechSynthesisUtterance(text);
            msg.rate = 1;
            msg.pitch = 1;
            msg.volume = 1; 

            window.speechSynthesis.speak(msg);   
    }

    // whatsapp link
  function getWhatsAppLink(text) {
    const phone = '916370489476';
    const message = `Hi, Chintu Send This ${text} Project Code.`;
    return generateWhatsAppLink(phone, message);
}

    return(
       <div className="container-fluid">
        <div className="container project-con">
            <div className="project-container">
                <div className="project-box">
                    <div className="own-project-box">
                        <h1>Own Projects</h1>
                        <div className="row">
                            <div className="col-lg-6 mb-4 ">
                                <div className="card">
                                    <img src="/images/project-1.png" alt="Network Not Connect" className="cart-img-top img-fluid rounded" />

                                    <div className="card-body">
                                        <a href="https://chintudash.github.io/Portfolio/" target="_blank" rel="noopener noreferrer" className="btn rounded-pill w-75 gitbtn" onMouseOver={()=> speakbtn("visit on github")}><GiClick color="#25D366" size={30}/> Visit Site <FaGithub size={20}/></a>
                                        <a href="https://github.com/ChintuDash/Portfolio.git" target="_blank" rel="noopener noreferrer" className="btn rounded-pill w-25 inbtn" onMouseOver={()=> speakbtn("Read project code")}>  Code </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4 ">
                                <div className="card">
                                    <img src="/images/project-2.png" alt="Network Not Connect" className="cart-img-top img-fluid rounded" />
                                    <div className="card-body">
                                        <a href="https://chintudash.github.io/cd-mart/" target="_blank" rel="noopener noreferrer" className="btn rounded-pill w-75 gitbtn" onMouseOver={()=> speakbtn("visit on github")}><GiClick color="#25D366" size={30}/> Visit Site <FaGithub size={20}/></a>
                                        <a href="https://github.com/ChintuDash/cd-mart.git" target="_blank" rel="noopener noreferrer" className="btn rounded-pill w-25 inbtn" onMouseOver={()=> speakbtn("Read project code")}> Code </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4 ">
                                <div className="card">
                                    <img src="/images/project-3.png" alt="Network Not Connect" className="cart-img-top img-fluid rounded" />
                                    <div className="card-body">
                                        <a href="https://chintudash.github.io/Shoes-Shop/" target="_blank" rel="noopener noreferrer" className="btn rounded-pill w-75 gitbtn" onMouseOver={()=> speakbtn("visit on github")}><GiClick color="#25D366" size={30}/> Visit Site <FaGithub size={20}/></a>
                                        <a href="https://github.com/ChintuDash/Shoes-Shop.git" target="_blank" rel="noopener noreferrer" className="btn rounded-pill w-25 inbtn" onMouseOver={()=> speakbtn("Read project code")}>  Code </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4 ">
                                <div className="card">
                                    <img src="/images/project-4.png" alt="Network Not Connect" className="card-img-top img-fluid rounded" />
                                    <div className="card-body">
                                        <a href="https://chintudash.github.io/Happy-New-Year/" target="_blank" rel="noopener noreferrer" className="btn rounded-pill w-75 gitbtn" onMouseOver={()=> speakbtn("visit on github")}><GiClick color="#25D366" size={30}/> Visit Site <FaGithub size={20}/></a>
                                        <a href="https://github.com/ChintuDash/Happy-New-Year.git" target="_blank" rel="noopener noreferrer" className="btn rounded-pill w-25 inbtn" onMouseOver={()=> speakbtn("Read project code")}>  Code </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4 ">
                                <div className="card">
                                    <img src="/images/project-5.png" alt="Network Not Connect" className="card-img-top img-fluid rounded" />
                                    <div className="card-body">
                                        <a href="https://chintudash.github.io/april/" target="_blank" rel="noopener noreferrer" className="btn rounded-pill w-75 gitbtn" onMouseOver={()=> speakbtn("visit on github")}><GiClick color="#25D366" size={30}/> Visit Site <FaGithub size={20}/></a>
                                        <a href="https://github.com/ChintuDash/april.git" target="_blank" rel="noopener noreferrer" className="btn rounded-pill w-25 inbtn" onMouseOver={()=> speakbtn("Read project code")}>  Code </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4 ">
                                <div className="card">
                                    <img src="/images/project-6.png" alt="Network Not Connect" className="card-img-top img-fluid rounded" />
                                    <div className="card-body">
                                        <a href="https://chintudash.github.io/Calendar/" target="_blank" rel="noopener noreferrer"  className="btn rounded-pill w-75 gitbtn" onMouseOver={()=> speakbtn("visit on github")}><GiClick color="#25D366" size={30}/> Visit Site <FaGithub size={20}/></a>
                                        <a href="https://github.com/ChintuDash/Calendar.git" target="_blank" rel="noopener noreferrer" className="btn rounded-pill w-25 inbtn" onMouseOver={()=> speakbtn("Read project code")}>  Code </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4 ">
                                <div className="card">
                                    <img src="/images/project-7.png" alt="Network Not Connect" className="card-img-top img-fluid rounded" />
                                    <div className="card-body">
                                        <a href="https://chintudash.github.io/TodoApp/" target="_blank" rel="noopener noreferrer" className="btn rounded-pill w-75 gitbtn" onMouseOver={()=> speakbtn("visit on github")}><GiClick color="#25D366" size={30}/> Visit Site <FaGithub size={20}/></a>
                                        <a href="https://github.com/ChintuDash/TodoApp.git" target="_blank" rel="noopener noreferrer" className="btn rounded-pill w-25 inbtn" onMouseOver={()=> speakbtn("Read project code")}>  Code </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4 ">
                                <div className="card">
                                    <img src="/images/project-8.png" alt="Network Not Connect" className="card-img-top img-fluid rounded" />
                                    <div className="card-body">
                                        <a href="https://chintudash.github.io/CricketGame/" className="btn rounded-pill w-75 gitbtn" target="_blank" rel="noopener noreferrer" onMouseOver={()=> speakbtn("visit on github")}><GiClick color="#25D366" size={30}/> Visit Site <FaGithub size={20}/></a>
                                        <a href="https://github.com/ChintuDash/CricketGame.git" className="btn rounded-pill w-25 inbtn" target="_blank" rel="noopener noreferrer" onMouseOver={()=> speakbtn("Read project code")}>  Code</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4 ">
                                <div className="card">
                                    <img src="/images/project-9.png" alt="Network Not Connect" className="card-img-top img-fluid rounded" />
                                    <div className="card-body">
                                        <a href="https://chintudash.github.io/Calculator/" target="_blank" rel="noopener noreferrer" className="btn rounded-pill w-75 gitbtn" onMouseOver={()=> speakbtn("visit on github")}><GiClick color="#25D366" size={30}/> Visit Site <FaGithub size={20}/></a>
                                        <a href="https://github.com/ChintuDash/Calculator.git" target="_blank" rel="noopener noreferrer" className="btn rounded-pill w-25 inbtn" onMouseOver={()=> speakbtn("Read project code")}>  Code </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="thick-hr"/>

                    {/* clone project section  */}
                <div className="clone-project-box">
                     <h1>Clone Projects</h1>
                        <div className="row">
                            <div className="col-lg-6 mb-4 ">
                                <div className="card">
                                    <img src="/images/nykaa.png" alt="Network Not Connect" className="cart-img-top img-fluid rounded" />
                                    <div className="card-body">
                                        <a href={getWhatsAppLink("Nykaa")} target="_blank" rel="noopener noreferrer"
                                          className="btn rounded-pill w-100 whatsapp" onMouseOver={()=> speakbtn("get the code of this project on whatsapp")}> 
                                            Get Zip File <FaWhatsapp  size={30}/>
                                        </a>                                       
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4 ">
                                <div className="card">
                                    <img src="/images/university.png" alt="Network Not Connect" className="cart-img-top img-fluid rounded" />
                                    <div className="card-body">
                                        <a href={getWhatsAppLink("University")} target="_blank" rel="noopener noreferrer"
                                          className="btn rounded-pill w-100 whatsapp" onMouseOver={()=> speakbtn("get the code of this project on whatsapp")}> 
                                            Get Zip File <FaWhatsapp  size={30}/>
                                        </a>                                       
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4 ">
                                <div className="card">
                                    <img src="/images/food-app.png" alt="Network Not Connect" className="cart-img-top img-fluid rounded" />
                                    <div className="card-body">
                                        <a href={getWhatsAppLink("Food-App")} target="_blank" rel="noopener noreferrer"
                                          className="btn rounded-pill w-100 whatsapp" onMouseOver={()=> speakbtn("get the code of this project on whatsapp")}> 
                                            Get Zip File <FaWhatsapp  size={30}/>
                                        </a>                                       
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4 ">
                                <div className="card">
                                    <img src="/images/news-app.png" alt="Network Not Connect" className="cart-img-top img-fluid rounded" />
                                    <div className="card-body">
                                        <a href={getWhatsAppLink("NewsAPI-App")} target="_blank" rel="noopener noreferrer"
                                          className="btn rounded-pill w-100 whatsapp" onMouseOver={()=> speakbtn("get the code of this project on whatsapp")}> 
                                            Get Zip File <FaWhatsapp  size={30}/>
                                        </a>                                       
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4 ">
                                <div className="card">
                                    <img src="/images/express.png" alt="Network Not Connect" className="cart-img-top img-fluid rounded" />
                                    <div className="card-body">
                                        <a href={getWhatsAppLink("Portfolio with Express.js")} target="_blank" rel="noopener noreferrer"
                                          className="btn rounded-pill w-100 whatsapp" onMouseOver={()=> speakbtn("get the code of this project on whatsapp")}> 
                                            Get Zip File <FaWhatsapp  size={30}/>
                                        </a>                                       
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4 ">
                                <div className="card">
                                    <img src="/images/bput.png" alt="Network Not Connect" className="cart-img-top img-fluid rounded" />
                                    <div className="card-body">
                                        <a href={getWhatsAppLink("BPUT")} target="_blank" rel="noopener noreferrer"
                                          className="btn rounded-pill w-100 whatsapp" onMouseOver={()=> speakbtn("get the code of this project on whatsapp")}> 
                                            Get Zip File <FaWhatsapp  size={30}/>
                                        </a>                                       
                                    </div>
                                </div>
                            </div>
                           
                          
                        </div>
                </div>

            </div>
            </div>
        </div>
       </div>
    )
}
export default Project;