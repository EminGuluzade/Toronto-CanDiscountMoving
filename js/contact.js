(function () {
  emailjs.init({
    publicKey: "DHGiTU2eZtrziKShO",
  });
})();
window.onload = function () {
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const movingFrom = document.getElementById("movingFrom").value;
      const movingTo = document.getElementById("movingTo").value;
      const date = document.getElementById("date-input").value;
      const email = document.getElementById("email").value;
      // const subject = document.getElementById("subject").value;
      const phone = document.getElementById("phone").value;
      const message = document.getElementById("message").value;
      let params = {
        from_name: name,
        email_id: email,
        subject: "Static Subject",
        phone_number: phone,
        message: message,
        date: date,
        moving_from: movingFrom,
        moving_to: movingTo,
      };
      emailjs.send("service_f5kh8zi", "template_rr0v8g5", params).then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Your message was sent successfully.",
            confirmButtonText: "OK",
          });
          document.getElementById("contactForm").reset();
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops... Something went wrong",
            text: `Error: Something went wrong`,
            confirmButtonText: "Try Again",
          });
        }
      );
    });
};
