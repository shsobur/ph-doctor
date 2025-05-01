import { LiaRegistered } from "react-icons/lia";
import "./DoctorDetails.css";
import { useLoaderData, useParams } from "react-router";

const DoctorDetails = () => {
  // Handling doctor data__
  const doctorData = useLoaderData();
  const { id } = useParams();
  const intId = Number(id);
  const data = doctorData.find((doctor) => doctor.id === intId);
  console.log(data);

  return (
    <>
      <section id="details_container">
        <div className="main_details_container">

          <div className="doctor_details_container">
            <h1>Doctor’s Profile Details</h1>
            <h2>
            Experienced Cardiologist focusing on complex heart diseases, preventive cardiology, and heart health education. Dedicated to improving patient outcomes through modern techniques.
            </h2>
          </div>

          <div className="doctor_info_container">

            <div className="doctor_details_image_container">
              <img
                src="https://i.postimg.cc/T3Gt618g/doctor-1-min.jpg"
                alt="Doctor Image"
              />
            </div>

            <div className="about_doctor_container">
              <h1 className="doctor_name">Dr. Emily Carter</h1>

              <p className="doctor_degree">
                MBBS, MD <br /> (Cardiology)
              </p>

              <ul className="doctor_work_place">
                <li>Working at</li>
                <li>City Heart Hospital</li>
              </ul>

              <ul className="doctor_reg_number">
                <li><LiaRegistered /></li>
                <li>Reg No:</li>
                <li>REG123456</li>
              </ul>

              <ul className="doctor_available_day">
                <li>Availability:</li>
                <li>Sunday</li>
                <li>Monday</li>
                <li>Thursday</li>
              </ul>

              <ul className="doctor_fee">
                <li>Consultation Fee:</li>
                <li>Taka : 273</li>
                <li>(incl. Vat)</li>
                <li> Per consultation</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default DoctorDetails;
