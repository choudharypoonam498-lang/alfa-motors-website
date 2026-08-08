const form = document.getElementById("bookingForm");
const msg = document.getElementById("bookingMsg");
document.querySelectorAll("[data-service]").forEach(a=>{
  a.addEventListener("click",()=>document.querySelector('[name="service"]').value=a.dataset.service);
});
form.addEventListener("submit", e=>{
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  const bookings = JSON.parse(localStorage.getItem("alfaBookings") || "[]");
  data.id = "ALFA-" + Date.now().toString().slice(-6);
  data.status = "New";
  bookings.push(data);
  localStorage.setItem("alfaBookings", JSON.stringify(bookings));
  msg.textContent = "Booking saved as " + data.id + ". Our team can contact you on " + data.phone + ".";
  msg.style.color = "#11823b";
  form.reset();
});
