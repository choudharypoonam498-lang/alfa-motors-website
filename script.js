const form = document.getElementById("bookingForm");
const msg = document.getElementById("bookingMsg");

document.querySelectorAll("[data-service]").forEach(function(a) {
  a.addEventListener("click", function() {
    const service = document.querySelector('[name="service"]');
    if (service) service.value = a.dataset.service;
  });
});

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = form.querySelector('[name="name"]').value;
  const phone = form.querySelector('[name="phone"]').value;
  const car = form.querySelector('[name="car"]').value;
  const service = form.querySelector('[name="service"]').value;
  const date = form.querySelector('[name="date"]').value;
  const time = form.querySelector('[name="time"]').value;
  const message = form.querySelector('[name="message"]').value;

  const emailBody = `NEW ALFA MOTORS SERVICE BOOKING

Customer: ${name}
Phone: ${phone}
Car: ${car}
Service: ${service}
Date: ${date}
Time: ${time}
Message: ${message}`;

  const gmailURL =
    "mailto:jsalfamotors@gmail.com" +
    "?subject=" +
    encodeURIComponent("New Alfa Motors Service Booking") +
    "&body=" +
    encodeURIComponent(emailBody);

  window.location.href = gmailURL;

  if (msg) {
    msg.textContent = "Booking details are ready in your email app. Please press Send.";
    msg.style.color = "#11823b";
  }
});
