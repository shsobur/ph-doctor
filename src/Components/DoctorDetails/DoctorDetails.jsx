import "./DoctorDetails.css";
import { LiaRegistered } from "react-icons/lia";
import { useLoaderData, useParams } from "react-router";

const DoctorDetails = () => {
  // Handling doctor data__
  const doctorData = useLoaderData();
  const { id } = useParams();
  const intId = Number(id);
  const data = doctorData.find((doctor) => doctor.id === intId);

  return (
    <>
      <section id="details_container">
        <div className="main_details_container">
          <div className="doctor_details_container">
            <h1>Doctor’s Profile Details</h1>
            <h2>{data.designation}</h2>
          </div>

          <div className="doctor_info_container">
            <div className="doctor_details_image_container">
              <img src={data.image} alt="Doctor Image" />
            </div>

            <div className="about_doctor_container">
              <h1 className="doctor_name">{data.name}</h1>

              <p className="doctor_degree">{data.education}</p>

              <ul className="doctor_work_place">
                <li>Working at</li>
                <li>{data.workplace}</li>
              </ul>

              <ul className="doctor_reg_number">
                <li>
                  <LiaRegistered />
                </li>
                <li>Reg No:</li>
                <li>{data.registration_number}</li>
              </ul>

              <ul className="doctor_available_day">
                <li>Availability:</li>
                <li>{data.availability[0]}</li>
                <li>{data.availability[1]}</li>
                <li>{data.availability[2]}</li>
              </ul>

              <ul className="doctor_fee">
                <li>Consultation Fee:</li>
                <li>Taka : {data.fee}৳</li>
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