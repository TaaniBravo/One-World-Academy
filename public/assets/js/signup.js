$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("form.signup");
  const emailInput = $("input#email-input");
  const passwordInput = $("input#password-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  const signUpUser = async (email, password) => {
    await $.post("/api/signup", {
      email: email,
      password: password
    });
    try {
      window.location.replace("/profile");
      // If there's an error, log the error
    } catch (err) {
      handleLoginErr(err);
    }
  };

  const handleLoginErr = err => {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  };
});
