import './header.css'
import icon from '../../assets/icon1.png'

export const Header = () => {
  return (
    <div className='header__block'>
    <div className='title__block'>
        <p>Hello, I am Svetlana!</p>
        <h1 className='title'>Full-Stack Developer</h1>
    </div>
    <div className='image__block'>
        <img src={icon} alt="avatar"/>
    </div>
    </div>
  )
}
