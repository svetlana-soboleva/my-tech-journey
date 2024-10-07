import { Header } from "./components/header/Header"
import {Links} from "./components/header/Links"
import { About} from "./components/about/About"
import { FaChevronDown } from "react-icons/fa";

function App() {


  return (
    <>
    <div className="page1">
    <Header/>
    <Links/>
    <button className="scrollDown">
    <FaChevronDown />
    </button>
    </div>
      <About/>
    </>
  )
}

export default App
