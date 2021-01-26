$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("form.form-signin");
  const firstNameInput = $("input#inputFirstName");
  const lastNameInput = $("input#inputLastName");
  const emailInput = $("input#inputEmail");
  const passwordInput = $("input#inputPassword");
  const bioInput = $("input#inputBio");
  const profileInput = $("input#inputProfilePic");
  const twitterInput = $("input#inputTwitter");
  const linkedInInput = $("input#inputLinkedIn");
  const gitHubInput = $("input#inputGitHub");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      firstName: firstNameInput.val().trim(),
      lastName: lastNameInput.val().trim(),
      bio: bioInput.val().trim(),
      profilePic: profileInput.val().trim(),
      twitterURL: twitterInput.val().trim(),
      linkedinURL: linkedInInput.val().trim(),
      githubURL: gitHubInput.val().trim()
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
      userData.lastName,
      userData.bio,
      userData.profilePic,
      userData.twitterURL,
      userData.linkedinURL,
      userData.githubURL
    );
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  const signUpUser = async (email, password, firstName, lastName) => {
    await $.post("/api/sign-up", {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      bio: bio,
      profilePic: profilePic,
      twitterURL: twitterURL,
      linkedinURL: linkedinURL,
      githubURL: githubURL
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
