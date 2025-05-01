import "./DoctorsCard.css";
import PropTypes from "prop-types";
import { RiRegisteredLine } from "react-icons/ri";
import { Link } from "react-router";

const DoctorsCard = ({ doctor }) => {
  const { id, image, name, education, experience, registration_number } =
    doctor;

  return (
    <>
      <div className="main_doctor_card_container">
        <div className="doctor_card_image_container">
          <img src={image} alt="doctor image" />
        </div>

        <div className="doctor_card_info_container">
          <ul className="doctor_service_info">
            <li>Available</li>
            <li>{experience} Experience</li>
          </ul>

          <h1>{name}</h1>
          <p>{education}</p>

          <ul className="doctor_reg_info">
            <li>
              <RiRegisteredLine />
            </li>
            <li>Reg No: {registration_number}</li>
          </ul>

          <Link to={`/doctorDetails/${id}`}>
            <button className="doctor_card_button">View Details</button>
          </Link>
        </div>
      </div>
    </>
  );
};

DoctorsCard.propTypes = {
  doctor: PropTypes.object,
};

export default DoctorsCard;
