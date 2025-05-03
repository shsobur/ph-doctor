import "./AllBooking.css";

const AllBooking = () => {
  const bookingStr = localStorage.getItem("bookings");
  const bookingData = JSON.parse(bookingStr);
  console.log(bookingData);

  return (
    <>
      <section id="booking_section">
        {bookingData.length === 0 ? (
          <div className="empty_booking_massage">
            <h1>No Booking!</h1>
          </div>
        ) : (
          <div className="main_booking_container">
            <h1>My Today Appointments</h1>
            <h2>
              Our platform connects you with verified, experienced doctors
              across various specialties — all at your convenience.
            </h2>

            {bookingData.map((booking) => (
              <div key={booking.id} className="booking_container">
                <h3>{booking.name}</h3>
                <ul>
                  <li>{booking.education}</li>
                  <li>Appointment Fee : {booking.fee} Taka + Vat</li>
                </ul>
                <button>Cancel Appointment</button>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default AllBooking;
