import "./AllBooking.css";
import { handleDeleteBooking } from "../../../Components/Booking/Booking";
import {
  BarChart,
  Tooltip,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const AllBooking = () => {
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  const bookingStr = localStorage.getItem("bookings");
  const bookingData = JSON.parse(bookingStr);

  const handleCancelBooking = (id) => {
    handleDeleteBooking(id);
  };

  // Chart__

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <>
      <section id="booking_section">
        {bookingData === null || bookingData.length === 0 ? (
          <div className="empty_booking_massage">
            <h1>No Booking!</h1>
          </div>
        ) : (
          <>
            <div className="main_chart_container">
              <BarChart
                width={1300}
                height={500}
                data={bookingData}
                margin={{
                  top: 50,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="fee"
                  fill="#8884d8"
                  shape={<TriangleBar />}
                  label={{ position: "top" }}
                >
                  {
                  bookingData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                  ))
                  }
                </Bar>
              </BarChart>
            </div>

            <div className="main_booking_container">
              <h1>My Today Appointments</h1>
              <h2>
                Our platform connects you with verified, experienced doctors
                across various specialties — all at your convenience.
              </h2>

              { 
              bookingData.map((booking) => (
                <div key={booking.id} className="booking_container">
                  <h3>{booking.name}</h3>
                  <ul>
                    <li>{booking.education}</li>
                    <li>Appointment Fee : {booking.fee} Taka + Vat</li>
                  </ul>
                  <button onClick={() => handleCancelBooking(booking.id)}>
                    Cancel Appointment
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default AllBooking;
