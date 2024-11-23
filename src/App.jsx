import { useRef } from "react";
import { Header } from "./components/header/Header";
import { Links } from "./components/header/Links";
import { About } from "./components/about/About";
import { FaChevronDown } from "react-icons/fa";
import { Skills } from "./components/skills/Skills";
import { FaChevronUp } from "react-icons/fa";
import { Education } from "./components/myEducation/Education";
import { Languages } from "./components/header/Languages";
import { WorkExperience } from "./components/workExperience/WorkExperience";
import { Project } from "./components/myProjects/Project";
function App() {
  const page1Ref = useRef(null);
  const page2Ref = useRef(null);
  const page3Ref = useRef(null);
  const page4Ref = useRef(null);
  const page5Ref = useRef(null);

  const scrollToPage1 = () => {
    if (page1Ref.current) {
      page1Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPage2 = () => {
    if (page2Ref.current) {
      page2Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPage3 = () => {
    if (page3Ref.current) {
      page3Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollBackToPage2 = () => {
    if (page2Ref.current) {
      page2Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPage4 = () => {
    if (page4Ref.current) {
      page4Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollBackToPage3 = () => {
    if (page3Ref.current) {
      page3Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPage5 = () => {
    if (page5Ref.current) {
      page5Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollBackToPage4 = () => {
    console.log("clicked")
    if (page4Ref.current) {
      page4Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="applicationContent">
      <div className="page1" ref={page1Ref}>
        <Header />
        <Links />
        <button className="scrollDown" onClick={scrollToPage2}>
          {/* <span>Click</span> */}
          <FaChevronDown />
        </button>
      </div>
      <div className="page2" ref={page2Ref}>
        <button className="scrollUp" onClick={scrollToPage1}>
          <FaChevronUp />
        </button>
        <About />
        <Skills />
        <button className="scrollDown" onClick={scrollToPage3}>
          <FaChevronDown />
        </button>
      </div>
      <div className="page3" ref={page3Ref}>
        <button className="scrollUp" onClick={scrollBackToPage2}>
          <FaChevronUp />
        </button>
        <Education />
        <Languages />
        <button className="scrollDown" onClick={scrollToPage4}>
          <FaChevronDown />
        </button>
      </div>
      <div className="page4" ref={page4Ref}>
        <button className="scrollUp" onClick={scrollBackToPage3}>
          <FaChevronUp />
        </button>
        <WorkExperience />
        <button className="scrollDown" onClick={scrollToPage5}>
          <FaChevronDown />
        </button>
      </div>
      <div className="page5" ref={page5Ref}>
        <button className="scrollUp" onClick={scrollBackToPage4}>
          <FaChevronUp />
        </button>
        <Project />
      </div>
    </div>
  );
}

export default App;
