import { React } from "react";
import * as FaIcons from 'react-icons/fa';

const Footer = ({pageId}) => {

    return (
        <footer id={pageId} style={{
            textAlign: 'left',
            backgroundColor: '#2222',
            paddingLeft: '3%',
            paddingTop: '1.5%',
            paddingRight: '3%',
            paddingBottom: '0.5%',
            clear: 'both',
            bottom: '0'
        }}>
            <h6>Connect with me</h6>
            <button type="button" className="btn" onClick={()=> window.open("https://www.linkedin.com/in/dustin-duong-chu/", "_blank")}>
                        <FaIcons.FaLinkedin style={{fontSize: '180%'}} />
            </button>
            <button type="button" className="btn" onClick={()=> window.open("https://github.com/dustin1709", "_blank")}>
                        <FaIcons.FaGithub style={{fontSize: '180%'}} />
            </button>
            <button type="button" className="btn" onClick={()=> window.open("https://www.facebook.com/", "_blank")}>
                        <FaIcons.FaFacebook style={{fontSize: '180%'}} />
            </button>
            <button type="button" className="btn" onClick={()=> window.open("https://www.instagram.com/", "_blank")}>
                        <FaIcons.FaInstagram style={{fontSize: '180%'}} />
            </button>
            <button type="button" className="btn" onClick={()=> window.open("https://twitter.com/", "_blank")}>
                        <FaIcons.FaTwitter style={{fontSize: '180%'}} />
            </button>
            <div style={{padding: '0.5%', clear: 'both'}}></div>
        </footer>
    );
}

export default Footer
