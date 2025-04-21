import "./Navbar.css";
import { GiGloves } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
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

          <div className="navbar_routes_container">
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

        </div>
      </nav>
    </>
  );
};

export default Navbar;
