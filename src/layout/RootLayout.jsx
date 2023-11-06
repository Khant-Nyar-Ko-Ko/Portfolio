import Menubar from "../components/Menubar";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Education from "../pages/Education";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Services from "../pages/Skill";


// eslint-disable-next-line react/prop-types
const RootLayout = () => {

  return (
    <div className=" flex flex-col w-screen">
      <Menubar/>
      <Home />
      <About />
      <Education />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
};

export default RootLayout;
