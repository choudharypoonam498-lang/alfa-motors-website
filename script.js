<script>
document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = e.target;

  const name = form.querySelector('[name="name"]').value;
  const phone = form.querySelector('[name="phone"]').value;
  const car = form.querySelector('[name="car"]').value;
  const service = form.querySelector('[name="service"]').value;
  const date = form.querySelector('[name="date"]').value;
  const time = form.querySelector('[name="time"]').value;
  const message = form.querySelector('[name="message"]').value;

  const text =
`🔧 NEW ALFA MOTORS SERVICE BOOKING

Customer: ${name}
Phone: ${phone}
Car: ${car}
Service: ${service}
Date: ${date}
Time: ${time}
Message: ${message}`;

  // Send booking to Alfa Motors WhatsApp
  const whatsapp =
    "https://wa.me/919235702436?text=" +
    encodeURIComponent(text);

  window.open(whatsapp, "_blank");

  // Prepare an email to Alfa Motors
  const email =
    "mailto:jsalfamotors@gmail.com" +
    "?subject=" + encodeURIComponent("New Alfa Motors Service Booking") +
    "&body=" + encodeURIComponent(text);

  setTimeout(function() {
    window.location.href = email;
  }, 800);

  alert("Your booking details have been prepared for Alfa Motors.");
});
</script>
