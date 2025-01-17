import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Resume />
      <Contact />
    </div>
  );
};

export default App;
