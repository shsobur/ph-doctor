import "./Doctors.css";
import DoctorsCard from "../../../Components/DoctorsCard/DoctorsCard";
import { useEffect, useState } from "react";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [displayCards, setDisplayCards] = useState(6);

  useEffect(() => {
    fetch("/doctor.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  const handleCards = () => {
    setDisplayCards(doctors.length);
  };

  return (
    <>
      <section id="doctors_container">
        <div className="main_doctors_section_container">
          <h2 className="doctors_section_title">Our Best Doctors</h2>
          <p className="doctors_section_sub_title">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it's a
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust.
          </p>

          <div className="main_doctors_card_container">
            {doctors.slice(0, displayCards).map((doctor) => (
              <DoctorsCard key={doctor.id} doctor={doctor}></DoctorsCard>
            ))}
          </div>

          <div
            className={
              displayCards === doctors?.length
                ? "doctor_button_close"
                : "doctors_section_button "
            }
          >
            <button onClick={handleCards}>View All Doctors</button>
          </div>

        </div>
      </section>
    </>
  );
};

export default Doctors;
