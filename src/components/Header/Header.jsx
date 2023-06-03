import './Header.scss'
import logo from '../../assets/Valve_logo.svg'

function Header() {
  return (
    <header className="main_header">
      <div className="header_inner_wrapper">
        <div className="top_nav">
          <div className="logo">
            <a href="https://www.valvesoftware.com/es/">
              <img src={logo} alt="Logo" />
            </a>
          </div>
        </div>
      </div>
      <div id="header_background_video" />
    </header>
  )
}

export default Header
