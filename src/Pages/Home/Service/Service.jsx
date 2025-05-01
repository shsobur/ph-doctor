import "./Service.css";
import { TbStars } from "react-icons/tb";
import { LuClipboardPenLine } from "react-icons/lu";
import { FaPeopleRobbery, FaPeopleRoof } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const Service = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

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
            <div ref={ref} className="service_card">
              <h4>
                <LuClipboardPenLine />
              </h4>
              <h2>{inView && <CountUp start={0} end={150} duration={5} />}+</h2>
              <p>Total Doctors</p>
            </div>

            <div ref={ref} className="service_card">
              <h4>
                <TbStars />
              </h4>
              <h2>{inView && <CountUp start={0} end={467} duration={5} />}+</h2>
              <p>Total Reviews</p>
            </div>

            <div ref={ref} className="service_card">
              <h4>
                <FaPeopleRoof />
              </h4>
              <h2>
                {inView && <CountUp start={0} end={1900} duration={5} />}+
              </h2>
              <p>Total Reviews</p>
            </div>

            <div ref={ref} className="service_card">
              <h4>
                <FaPeopleRobbery />
              </h4>
              <h2>{inView && <CountUp start={0} end={300} duration={5} />}+</h2>
              <p>Total Stuffs</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;