function initContactForm() {
  const form = document.getElementById("contact-form");

  if (!form) {
    setTimeout(initContactForm, 500);
    return;
  }

  emailjs.init({
    publicKey: "9cEO0mQYMD9wJOI8B",
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .sendForm("service_c019c6m", "template_yfqec7k", this)
      .then(() => {
        alert("Información enviada correctamente");
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Error al enviar el mensaje");
      });
  });
}

initContactForm();
