import './NavBar.css'
import logo from './logo.png'
import { useState } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function NavBar(){



            useGSAP(()=>{

              gsap.fromTo(
    ".navbar",   // your element selector
    { scale: 0.8, opacity: 0 }, // starting state
    { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" } // end state
  );
});





  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    return(
    <div className="navbarWrapper">
        <nav className="navbar">
            <div className={isOpen ? "navbarContainerHide" : "navbarContainer"}>
                <button onClick={toggleMenu} className="navbarToggle">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                <div className="navbarLogo">
                    <img className='logo' src={logo} alt=''/>
                    <a>PLEX</a>
                </div>
                <ul className={isOpen ? "navbarMenuHide" : "navbarMenu"}>
                    <li><a>Home</a></li>
                    <li><a>About Us</a></li>
                    <li><a>Projects</a></li>
                    <li><a>FAQ</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
        </nav>
    </div>)
}

export default NavBar
