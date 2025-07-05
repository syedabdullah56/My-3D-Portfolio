import { BrowserRouter } from "react-router-dom"
import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from "./components"
const App = () => {
  const showExperience = true; // Setting this to false to hide the Experience section because I dont have any experience yet
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

      <Tech />
      <Works />
      {showExperience && <Feedbacks />}

      <div className="relative z-0">
         <Contact />
          <StarsCanvas />
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
