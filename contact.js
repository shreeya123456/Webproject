//contact //
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (name && email && message) {
    formMessage.textContent = "Thank you! Your message has been sent.";
    this.reset();
  } else {
    formMessage.textContent = "Please fill in all the fields.";
    formMessage.style.color = "red";
  }
});
