$(document).ready(() => {
  // Getting references to our form and inputs
  const signInBtn = $("form.form-signin");
  const emailInput = $("input#inputEmail");
  const passwordInput = $("input#inputPassword");

  // When the form is submitted, we validate there's an email and password entered
  signInBtn.on("submit", event => {
    event.preventDefault();
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    console.log(userData);

    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    signInUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  const signInUser = async (email, password) => {
    await $.post("/api/sign-in", {
      email: email,
      password: password
    });

    try {
      window.location.replace("/user");
      // If there's an error, log the error
    } catch (err) {
      console.log(err);
    }
  };
});
