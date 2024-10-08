import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './links.css'
export const Links = () => {
  return (
    <div className="links__block">
        <a className="link" href="https://github.com/svetlana-soboleva">
          <FaGithub />
        </a>
        <a className="link" href="https://www.linkedin.com/in/svetlana-soboleva-alex/">
        <FaLinkedin />
        </a>
    </div>
  )
}
