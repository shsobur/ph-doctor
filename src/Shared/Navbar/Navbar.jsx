import "./Navbar.css";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { TiThMenu } from "react-icons/ti";
import { GiGloves } from "react-icons/gi";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);

  return (
    <>
      <nav>
        <div className="main_nav_parent_container">
          <nav className="nav_container">
            <div className="web_name">
              <h2>
                <GiGloves />
                PH Doctor
              </h2>
            </div>

            <div
              id="main_nav_navigate_container"
              className={
                burgerMenu
                  ? "#main_nav_navigate_container isActive"
                  : "#main_nav_navigate_container"
              }
            >
              <ul onClick={() => setBurgerMenu(!burgerMenu)}>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "text-[#0071FF]" : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/bookings"
                    className={({ isActive }) =>
                      isActive ? "text-[#0071FF]" : ""
                    }
                  >
                    My-Bookings
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/blogs"
                    className={({ isActive }) =>
                      isActive ? "text-[#0071FF]" : ""
                    }
                  >
                    Blogs
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? "text-[#0071FF]" : ""
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="nav_signin_container">
              <Link to="/">
                <button>SING IN</button>
              </Link>
            </div>

            <div
              onClick={() => setBurgerMenu(!burgerMenu)}
              className="burger_menu_container"
            >
              {burgerMenu ? (
                <div>
                  <TiThMenu />
                </div>
              ) : (
                <div>
                  <ImCross />
                </div>
              )}
            </div>
          </nav>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
