

    const form = document.getElementById("paymentForm");
    const verification = document.getElementById("verification");
    const ticket = document.getElementById("ticket");

    let generatedCode = "";
    let userData = {};

    form.addEventListener("submit", (e) => {
      e.preventDefault();


      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const amount = document.getElementById("amount").value;

      userData = { name, email, amount };


      generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
      alert("Your verification code is: " + generatedCode);


      form.classList.add("hidden");
      verification.classList.remove("hidden");
    });

    document.getElementById("verifyBtn").addEventListener("click", () => {
      const inputCode = document.getElementById("verifyCode").value;

      if (inputCode === generatedCode) {

        verification.classList.add("hidden");
        ticket.classList.remove("hidden");

        document.getElementById("ticketId").textContent =
          "TCKT-" + Math.floor(Math.random() * 1000000);
        document.getElementById("ticketName").textContent = userData.name;
        document.getElementById("ticketEmail").textContent = userData.email;
        document.getElementById("ticketAmount").textContent = userData.amount;
      } else {
        alert("Invalid verification code. Try again!");
      }
    });

