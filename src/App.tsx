import About from "./AboutUs/About.tsx"
import ContactUs from "./Contact/ContactUs.tsx"
import FAQ from "./FAQ/FAQ.tsx"
import HeroB from "./HeroB/HeroB.tsx"
import NavBar from "./NavBar/NavBar.tsx"
import Projects from "./Projects/Projects.tsx"
import Footer from "./footer/Footer.tsx"
import { Analytics } from "@vercel/analytics/next"
import './index.css'


function App() {
  return (<div className="mainBG">
    <NavBar/>
    <HeroB/>
    <About/>
    <Projects/>
    <FAQ/>
    <ContactUs/>
    <Footer/>
     <Analytics />
    </div>)
}

export default App