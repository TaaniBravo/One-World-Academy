$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("form.form-signin");
  const firstNameInput = $("input#inputFirstName");
  const lastNameInput = $("input#inputLastName");
  const emailInput = $("input#inputEmail");
  const passwordInput = $("input#inputPassword");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      firstName: firstNameInput.val().trim(),
      lastName: lastNameInput.val().trim()
    };

    if (
      !userData.email ||
      !userData.password ||
      !userData.firstName ||
      !userData.lastName
    ) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(
      userData.email,
      userData.password,
      userData.firstName,
      userData.lastName
    );
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  const signUpUser = async (email, password, firstName, lastName) => {
    await $.post("/api/user", {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName
    });
    try {
      window.location.replace("/user");
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
