import './About.css'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function About(){

        useGSAP(()=>{




          
        gsap.from(".aboutTitle", {
            
            scrollTrigger:{
                trigger:".aboutTitle",
                start:"top 80%",
                end:"top 30%",
                markers: false,},

            y: 50,        // move up from 50px below
            opacity: 0,   // fade in
            duration: 1,
            ease: "power2.out",


            });

        gsap.from(".aboutWrapper", {
            
            scrollTrigger:{
                trigger:".aboutWrapper",
                start:"top 80%",
                end:"top 30%",
                markers: false,},

            y: 50,      // move up from 50px below
            opacity: 0,   // fade in
            duration: 1,
            ease: "power2.out",


            });
        
        
        
        })
 





    return(
        <div className='componentWrapper'>
            <div className='aboutTitle'><h1>About  </h1><h2>Us</h2></div>
            <div className="aboutWrapper">
            <div className='aboutContainer'>
                <h1>What we do</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aut?</p>
            </div>
            <div className='serviceContainer'>
                <div className='service'>
                    <h2>Video Editing</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit tempore numquam aliquid </p></div>
                    <div className='service'>
                    <h2>Video Editing</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit tempore numquam aliquid </p></div>
                    <div className='service'>
                    <h2>Video Editing</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit tempore numquam aliquid </p></div>
                </div>
            </div>
        </div>
    )
}

export default About