import "../Header/Header.css"
import logo from "../../Images/flicoPictures.png"
import Navbar from "../Header/Navbar"
function Header() {
  return (
    <div className="headerContainer">
      <div className="headerContainer__logo">
        <img className="headerContainer__logo__img" src={logo} />
      </div>
    </div>
  )
}

export default Header
