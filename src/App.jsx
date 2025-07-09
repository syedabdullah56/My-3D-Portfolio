import { BrowserRouter } from "react-router-dom"
import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Projects,StarsCanvas} from "./components"
const App = () => {
  const showExperience = false; // Setting this to false to hide the Experience section because I dont have any experience yet
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">

      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>

      <About />

      {showExperience && 
      <div className="relative top-[8vh]">
      <Experience />
      </div>}

      <div className="relative top-[12vh]">
      <Tech />
      </div>

      <div className="relative top-[22vh]">
      <Projects />
      </div>

      {showExperience && 
      <div className="relative top-[30vh]">
      <Feedbacks />
      </div>}

      <div className="relative z-0 top-[32vh]">
         <Contact />
          <StarsCanvas />
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
