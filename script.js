document.getElementById("bookingForm").addEventListener("submit", function(e){
  e.preventDefault();
  const data = new FormData(this);
  const message = document.getElementById("formMessage");
  message.textContent = "Thank you! Your enquiry has been recorded on this demo page.";
  this.reset();
});