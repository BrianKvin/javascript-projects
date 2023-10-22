import "./navbar.css";
// import { AiOutlineHome } from "react-icons/ai";
// import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { FaServicestack } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { BiSolidContact, BiHomeSmile } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg container">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          Kelvin
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#home">
                <BiHomeSmile /> Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                <GiSkills /> Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                <FaServicestack /> Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                <BiSolidContact /> Contact
              </a>
            </li>
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#contact"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#Email">
                    <AiOutlineMail /> Email
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#phone">
                    <AiFillPhone /> Phone
                  </a>
                </li>
              </ul>
            </li> */}
            {/* <i className="uil uil-times nav__close"></i> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
