import video1 from './plex_video2.mp4'
import './HeroB.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HeroB(){

            useGSAP(()=>{

              gsap.fromTo(
    ".titleContainer",   // your element selector
    { scale: 0.5, opacity: 0 }, // starting state
    { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" } // end state
  );
});

    return(
        <div className='heroWrapper'>
            <div className='titleContainer'> 
            <div className='title'><h1 className='titleBrand'>PLEX</h1><h1 className='titleName'>Visuals</h1></div>
            <h2 className='subtext'>helping business standout </h2></div>  
            <div className="video-container">
                <div className="overlay"></div>
                <video autoPlay muted loop playsInline src={video1} />
            </div>
        </div>
    )
}

export default HeroB