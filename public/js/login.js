$(document).ready(() => {
  // Getting references to our form and inputs
  const loginBtn = $("#login-btn");
  const emailInput = $("#inputEmail");
  const passwordInput = $("#inputPassword");

  // When the form is submitted, we validate there's an email and password entered
  loginBtn.on("submit", event => {
    event.preventDefault();
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };
    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  const loginUser = async (email, password) => {
    await $.post("/api/login", {
      email: email,
      password: password
    });

    try {
      window.location.replace("/profile");
      // If there's an error, log the error
    } catch (err) {
      console.log(err);
    }
  };
});
