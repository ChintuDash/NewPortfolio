
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiJquery } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { PiMicrosoftWordLogoFill } from "react-icons/pi";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { PiMicrosoftPowerpointLogoFill } from "react-icons/pi";
import { FaDatabase } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";


const Tools = ()=>{
    const autospeak =(text)=>{
        const msg = new SpeechSynthesisUtterance(text);
        msg.volume=0.7;
        msg.rate=1;
        msg.pitch=1;
        window.speechSynthesis.speak(msg);
    }
    return(
        <div className="container-fluid">
            <div className="container tools-container">
                <div className="row tool-main-box">
                    <h1>Technology</h1>
                    <div className="col-lg-6 tool-col">
                            <h2>Front End</h2>
                        <div className="tool-list">
                            <div class="tool-box">
                                <FaHtml5 class="tool html" title="HtML" onMouseEnter={()=>autospeak("html")}/>
                                <FaCss3Alt class="tool css" title="CSS" onMouseEnter={()=>autospeak("css")}/>
                                <DiJavascript class="tool js" title="JavaScript" onMouseEnter={()=>autospeak("javascript")}/>
                                <FaReact class="tool react" title="React" onMouseEnter={()=>autospeak("react")}/>
                                <FaBootstrap class="tool bootstrap" title="BootStrap" onMouseEnter={()=>autospeak("bootstrap")}/>
                                <SiJquery class="tool jquery" title="JQuery" onMouseEnter={()=>autospeak("jquery")}/>
                                <img src="/images/gsap.png" className="tool gsap img-fluid" title="Gsap" alt=""  onMouseEnter={()=>autospeak("g sap")}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 tool-col">
                            <h2>Back End</h2>
                        <div className="tool-list">
                            <div class="tool-box">
                                <FaPhp class="tool php" title="PHP" onMouseEnter={()=>autospeak("php")}/>
                                <GrMysql class="tool mysql" title="MYSQL" onMouseEnter={()=>autospeak("mysql")}/>
                                <FaNode class="tool node" title="NODE.JS" onMouseEnter={()=>autospeak("node js")}/>
                                <SiExpress class="tool express" title="Express.Js" onMouseEnter={()=>autospeak("express js")}/>
                                <DiMongodb class="tool mongodb" title="MongoDB" onMouseEnter={()=>autospeak("mongodb")}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 tool-col">
                            <h2>Extra Tools</h2>
                        <div className="tool-list">
                            <div class="tool-box">
                                <FaGitAlt class="tool git" title="GIT" onMouseEnter={()=>autospeak("git")}/>
                                <FaGithub class="tool github" title="GitHub" onMouseEnter={()=>autospeak("github")}/>
                                <VscVscode class="tool vscode" title="VS Code" onMouseEnter={()=>autospeak("vs code")}/>
                                 <img src="/images/ajax.png" className="tool ajax img-fluid" title="AJAX" alt=""  onMouseEnter={()=>autospeak("ajax")}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 tool-col">
                            <h2>Other Tools</h2>
                        <div className="tool-list">
                            <div class="tool-box">
                                <PiMicrosoftWordLogoFill class="tool word" title="MS Word" onMouseEnter={()=>autospeak("microsoft word")}/>
                                <PiMicrosoftExcelLogoFill class="tool excel" title="MS Excel" onMouseEnter={()=>autospeak("microsoft excel")}/>
                                <PiMicrosoftPowerpointLogoFill class="tool powerpoint" title="MS Powerpoint" onMouseEnter={()=>autospeak("microsoft powerpoint")}/>
                                <FaDatabase class="tool access" title="MS Access" onMouseEnter={()=>autospeak("microsoft access")}/>
                                <SiAdobephotoshop class="tool photoshop" title="Adobe PhotoShop" onMouseEnter={()=>autospeak("photoshop")}/>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Tools;