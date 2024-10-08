import { useRef } from 'react';
import { Header } from "./components/header/Header"
import {Links} from "./components/header/Links"
import { About} from "./components/about/About"
import { FaChevronDown } from "react-icons/fa";
import { Skills } from './components/skills/Skills';
import { FaChevronUp } from "react-icons/fa";

function App() {

  const page2Ref = useRef(null)
  const page1Ref = useRef(null)

  const scrollToPage2 = () => {
    if (page2Ref.current) {
      page2Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const scrollToPage1 = () => {
    if (page1Ref.current) {
      page1Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
    <div className="page1" ref={page1Ref}>
    <Header/>
    <Links/>
    <button className="scrollDown" onClick={scrollToPage2}>
    <FaChevronDown />
    </button>
    </div >
    <div className="page2" ref={page2Ref}>
      <button className='scrollUp'  onClick={scrollToPage1}>
        <FaChevronUp/>
      </button>
      <About/>
      <Skills/>
      <button className="scrollDown" onClick={scrollToPage2}>
    <FaChevronDown />
    </button>
    </div>
    </>
  )
}

export default App
