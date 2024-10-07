import './skills.css'
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiVuedotjs } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiTrpc } from "react-icons/si";
import { SiTypeorm } from "react-icons/si";

export const Skills = () => {
  return (
    <div className='skills'>
      <h3 className="title__skills">Skills</h3>
      <div className='icons'>
      <div className='icon nextjs'>
    <SiNextdotjs />
    <span className="icon-text">Next.js</span>
  </div>
  <div className='icon javascript'>
    <SiJavascript />
    <span className="icon-text">JavaScript</span>
  </div>
  <div className='icon typescript'>
    <SiTypescript />
    <span className="icon-text">TypeScript</span>
  </div>
  <div className='icon tailwind'>
    <SiTailwindcss />
    <span className="icon-text">Tailwind CSS</span>
  </div>
  <div className='icon html'>
    <FaHtml5 />
    <span className="icon-text">HTML5</span>
  </div>
  <div className='icon css'>
    <SiCss3 />
    <span className="icon-text">CSS3</span>
  </div>
  <div className='icon react'>
    <SiReact />
    <span className="icon-text">React</span>
  </div>
  <div className='icon vue'>
    <SiVuedotjs />
    <span className="icon-text">Vue.js</span>
  </div>
  <div className='icon node'>
    <SiNodedotjs />
    <span className="icon-text">Node.js</span>
  </div>
  <div className='icon express'>
    <SiExpress />
    <span className="icon-text">Express.js</span>
  </div>
  <div className='icon java'>
    <FaJava />
    <span className="icon-text">Java</span>
  </div>
  <div className='icon spring'>
    <SiSpringboot />
    <span className="icon-text">Spring Boot</span>
  </div>
  <div className='icon docker'>
    <SiDocker />
    <span className="icon-text">Docker</span>
  </div>
  <div className='icon trpc'>
    <SiTrpc />
    <span className="icon-text">tRPC</span>
  </div>
  <div className='icon typeorm'>
    <SiTypeorm />
    <span className="icon-text">TypeORM</span>
  </div>
      </div>
    </div>
  )
}
