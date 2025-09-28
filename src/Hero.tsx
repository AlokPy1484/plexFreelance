import { Button } from "@/components/ui/button"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function Hero(){


        useGSAP(()=>{

              gsap.fromTo(
    ".my-element",   // your element selector
    { scale: 0, opacity: 0 }, // starting state
    { scale: 1, opacity: 1, duration: 1, ease: "power2.out" } // end state
  );
});


    return(
        <div className="flex h-screen justify-center">
        <div className="flex flex-col items-center justify-center w-[80vw]">
            <h1 className="p-1">This is a Hero section</h1>
            <p className="p-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident officiis dolores esse aperiam veniam dolor deserunt, unde non aut suscipit iusto neque, debitis accusantium dolorum qui nobis? Autem magni harum quisquam tempore, qui ex optio incidunt eum, accusamus libero consequatur repellendus nemo? Fugit itaque a cum amet quas illo quaerat!</p>
            <Button>Click me</Button>

        </div>
        </div>
    )
}
export default Hero