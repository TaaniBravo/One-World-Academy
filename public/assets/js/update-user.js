// const $userId =
const $userForm = $("form");
const $userFirstName = $("input#inputFirstName");
const $userLastName = $("input#inputLastName");
const $userEmail = $("input#inputEmail");
const $userPassword = $("input#inputPassword");
const $userTwitter = $("input#inputTwitter");
const $userLinkedIn = $("input#inputLinkedIn");
const $userGitHub = $("input#inputGitHub");
const $userBio = $("input#inputBio");
const $userProfilePic = $("input#inputProfilePic");

$(document).ready(() => {
  getUser();

  $userForm.on("submit", event => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const updatedUser = {
      email: $userEmail.val().trim(),
      password: $userPassword.val().trim(),
      firstName: $userFirstName.val().trim(),
      lastName: $userLastName.val().trim(),
      twitterURL: $userTwitter.val().trim(),
      linkedinURL: $userLinkedIn.val().trim(),
      githubURL: $userGitHub.val().trim()
    };

    // Send the POST request.
    updateUser(updatedUser);
  });
});

const updateUser = async updatedUser => {
  await $.ajax({
    url: "/api/user_data",
    type: "PUT",
    data: updatedUser
  });

  // console.log(data);
  window.location.replace("/user");
};

const getUser = async () => {
  await $.get("/api/user_data", userData => {
    $userEmail.val(userData.email);
    $userFirstName.val(userData.firstName);
    $userLastName.val(userData.lastName);
    $userTwitter.val(userData.twitterURL);
    $userLinkedIn.val(userData.linkedinURL);
    $userGitHub.val(userData.githubURL);
    $userBio.val(userData.bio);
    $userProfilePic.val(userData.profilePic);
  });
};
