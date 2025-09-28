import './FAQ.css'

function FAQ(){


        // useGSAP(()=>{

          
        // gsap.from("faqContainer", {
            
        //     scrollTrigger:{
        //         trigger:".faqTitle",
        //         start:"top 80%",
        //         end:"top 30%",
        //         markers: true,},

        //     y: 50,        // move up from 50px below
        //     opacity: 0,   // fade in
        //     duration: 1,
        //     ease: "power2.out",


        //     });

        // gsap.from(".serviceContainer", {
            
        //     scrollTrigger:{
        //         trigger:".serviceContainer",
        //         start:"top 80%",
        //         end:"top 30%",

        //         markers: false,},

        //     y: 50,      // move up from 50px below
        //     opacity: 0,   // fade in
        //     duration: 1,
        //     ease: "power2.out",
        //     stagger: 1 ,


        //     });
        
        
        
        // })
 




    return(
        <div className='faqComponentWrapper'>
            
            <div className="faqWrapper">
            <div className='faqContainer'>
                <div className='faqTitle'><h1>FAQ</h1><h2>s</h2></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className='serviceContainer'>
                <div className='faq'>
                    <div className="text">
                    <h2>What types of videos do you edit ?</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing </p></div></div>
                    <div className='faq'>
                    <h2>How long it take to deliver a finished video ?</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur </p></div>
                    <div className='faq'>
                    <h2>Do you provide stock images?</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur </p></div>
                    <div className='faq'>
                    <h2>How many revisions are free ?</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur </p></div>
                </div>
            </div>
        </div>
    )
}

export default FAQ
