import { LuClipboardPenLine } from "react-icons/lu";
import "./Service.css";
import { TbStars } from "react-icons/tb";
import { FaPeopleRobbery, FaPeopleRoof } from "react-icons/fa6";

const Service = () => {
  return (
    <>
      <section id="main_service_container">
        <div className="service_section_container">
          <h1>We Provide Best Medical Services</h1>
          <p>
            Our platform connects you with verified
            <br />
            experienced doctors across various specialties — all at your
            convenience.{" "}
          </p>

          <div className="service_section_info_container">
            <div className="service_card">
              <h4>
                <LuClipboardPenLine />
              </h4>
              <h2>199+</h2>
              <p>Total Doctors</p>
            </div>

            <div className="service_card">
              <h4>
                <TbStars />
              </h4>
              <h2>467+</h2>
              <p>Total Reviews</p>
            </div>

            <div className="service_card">
              <h4>
                <FaPeopleRoof />
              </h4>
              <h2>1900+</h2>
              <p>Total Reviews</p>
            </div>

            <div className="service_card">
              <h4>
                <FaPeopleRobbery />
              </h4>
              <h2>300+</h2>
              <p>Total Stuffs</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;