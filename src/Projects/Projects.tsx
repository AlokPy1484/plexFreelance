import video1 from './plex_video1.mp4'

import './Projects.css'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



function Projects(){
    const mm = gsap.matchMedia();

        useGSAP(()=>{

            
    mm.add("(max-width: 500px)", () => {
        gsap.from(".projectCotainer", {
            scrollTrigger:{
                trigger:".projectItem1",
                start:"top 30%",
                end:"top -300%",
                scrub:true,
                markers: false,},
                // toggleActions:"restart complete reverse none"},
                stagger: 0.1,
                scale: 1.25, 
                ease:"power2.out",
            });})


        gsap.from(".projectCotainer", {
            scrollTrigger:{
                trigger:".projectItem1",
                start:"top 30%",
                end:"top -300%",
                scrub:true,
                markers: false,},
                // toggleActions:"restart complete reverse none"},
                stagger: 0.1,
                scale: 1.25, 
                ease:"power2.out",
            });
          
        gsap.from(".projectTitle", {
            
            scrollTrigger:{
                trigger:".projectTitle",
                start:"top 80%",
                end:"top 30%",
                toggleActions: "restart complete reverse none",
                markers: false,},

            y: 50,        // move up from 50px below
            opacity: 0,   // fade in
            duration: 1,
            ease: "power2.out",


            });
        
        
        
        })
 





    return(
        <div className="projectsWrapper">
            <div className='projectTitle'><h1>Our</h1> <h2>Projects</h2></div>
            <div className='projectCotainer'>
            <div className="projects"><div className="projectItem1"><video autoPlay controls muted loop playsInline src={video1} /></div></div>
            <div className="projects"><div className="projectItem2"><video autoPlay controls muted loop playsInline src={video1} /></div></div>
            {/* <div className="projects"><div className="projectItem3"><video autoPlay controls muted loop playsInline src={video1} /></div></div> */}
            {/* <div className="projects"><div className="projectItem4"><video autoPlay controls muted loop playsInline src={video2} /></div></div> */}
            </div>

        </div>
    )
}

export default Projects