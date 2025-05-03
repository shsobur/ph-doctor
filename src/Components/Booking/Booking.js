import Swal from "sweetalert2";

const handleExistBooking = () => {
  let bookings = [];
  const existBookingStr = localStorage.getItem("bookings");

  if (existBookingStr) {
    bookings = JSON.parse(existBookingStr);
  }

  return bookings;
};

const handleBooking = (bookingDoctorData, navigate) => {
  const bookingData = handleExistBooking();
  console.log(bookingData);

  const isExistBooking = bookingData.find(
    (booking) => booking.id === bookingDoctorData.id
  );

  if (isExistBooking) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "error",
      title: "Booking already exist",
    });
    return;
  }

  bookingData.push(bookingDoctorData);
  const data = JSON.stringify(bookingData);
  localStorage.setItem("bookings", data);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: "success",
    title: "Booked successfully",
  });

  navigate("/bookings");
};

const handleDeleteBooking = (id) => {
  const bookingsStr = localStorage.getItem("bookings");
  const bookings = JSON.parse(bookingsStr);

  const remainingBooking = bookings.filter(booking => booking.id !== id);
  const data = JSON.stringify(remainingBooking);
  localStorage.setItem("bookings", data);
  window.location.reload();
}

export { handleBooking, handleDeleteBooking };