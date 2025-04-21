import { useState } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { GiGloves } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";
import { RxCross1, RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <nav>
        <div className="main_navbar_container">
          <div className="navbar_logo_container">
            <h1>
              <span>
                <GiGloves />
              </span>
              PH Doctor
            </h1>
          </div>

          <div id="desktop_routes" className="navbar_routes_container">
            <ul>
              <li>Home</li>
              <li>My-Bookings</li>
              <li>Blogs</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div
            id={!menu ? "active_mobile_routes" : ""}
            className="navbar_mobile_routes_container"
          >
            <ul>
              <li>Home</li>
              <li>My-Bookings</li>
              <li>Blogs</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="navbar_search_container">
            <input type="text" placeholder="Search here" />
            <span>
              <IoSearchOutline />
            </span>
          </div>

          <button id="menu_container" onClick={() => setMenu(!menu)}>
            {menu ? (
              <h3 id="menu_bar_off">
                <RxCross1 />
              </h3>
            ) : (
              <h3 id="menu_bar_on">
                <FaBars />
              </h3>
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;