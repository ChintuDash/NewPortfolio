
import { CgMail } from "react-icons/cg";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";

import { generateWhatsAppLink } from '../utils/utils'; 
import { generateGmailLink } from '../utils/mailUtils';
const Contact = () =>{

        // whatsapp link
  function getWhatsAppLink() {
    const phone = '916370489476';
    const message = "Hi Chintu, I visited your portfolio website and would like to connect with you.";
    return generateWhatsAppLink(phone, message);
};  

// Gmail
  function getGmailLink() {
    const email = "chintudash2019@gmail.com";
    const subject = "Portfolio Inquiry from Your Website";
    const body = `Hi Chintu,\n\nI came across your portfolio and I’d like to get in touch regarding...`;
    return generateGmailLink(email, subject, body);
};

// phone
 const phoneNumber = "+919090011063";
  function getPhoneLink() {
    return `tel:${phoneNumber}`;
  }

//   Resume
const resumeImage = "/resume/resume.jpg";

// downlode resume
   const handleClick = (e) => {
    e.preventDefault();
    if (window.confirm("Do you really want to download the resume?")) {
      window.location.href = "/resume/Chintu_Dash_Resume.pdf"; 
    }
  };

//   speak 
    const speakcon = (text)=>{
           window.speechSynthesis.cancel();
            const msg = new SpeechSynthesisUtterance(text);
            msg.rate = 1;
            msg.pitch = 1;
            msg.volume = 1; 
            window.speechSynthesis.speak(msg);   
    };

    return(
        <div className="container-fluid">
            <div className="container contact-box">
                <div className="row contact-content-box py-lg-5">
                    <h1>Contact</h1>
                    <div className="col-lg-4 py-4">
                        <a href={getGmailLink()} target="_blank" rel="noopener noreferrer" onMouseOver={()=> speakcon("contact with gmail")} className="btn w-100 text-start gmail" ><CgMail size={50} className='icon'/> &nbsp;&nbsp;&nbsp;  chintudash2019@gmail.com</a>
                    </div>
                    <div className="col-lg-4 py-4">
                        <a href={getPhoneLink()} target="_blank" rel="noopener noreferrer" onMouseOver={()=> speakcon("contact with Phone")} className="btn w-100 text-start phone"><FaPhoneVolume size={50} className='icon'/> &nbsp;&nbsp;&nbsp; 91-9090011063</a>
                    </div>
                    <div className="col-lg-4 py-4">
                        <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer"
                             className="btn w-100 text-start whatsapp" onMouseOver={()=> speakcon("contact with whatsapp")}> 
                            <FaWhatsapp  size={50} className='icon'/>  &nbsp;&nbsp;&nbsp; 91-6370489476
                        </a>      
                    </div>
                    <div className="col-lg-4 py-4">
                        <a href={resumeImage} target="_blank" rel="noopener noreferrer" onMouseOver={()=> speakcon("read resume")} className="btn w-100 text-start read"><FaBookReader size={50} className='icon'/>&nbsp;&nbsp;&nbsp; Read Resume</a>
                    </div>
                    <div className="col-lg-4 pt-4">
                        <a href="/resume/Chintu_Dash_Resume.pdf" target="_blank" rel="noopener noreferrer" download className="btn w-100 text-start downlode" onMouseOver={()=> speakcon("downlode resume")} onClick={handleClick}><FaDownload size={50} className='icon'/> &nbsp;&nbsp;&nbsp; Downlode Resume</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;