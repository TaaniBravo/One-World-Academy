// const $userId =
const $userForm = $("form");
const $userFirstName = $("input#inputFirstName");
const $userLastName = $("input#inputLastName");
const $userEmail = $("input#inputEmail");
const $userPassword = $("input#inputPassword");
const $userTwitter = $("input#inputTwitter");
const $userLinkedIn = $("input#inputLinkedIn");
const $userGitHub = $("input#inputGibHub");

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

    if (
      !updatedUser.email ||
      !updatedUser.password ||
      !updatedUser.firstName ||
      !updatedUser.lastName
    ) {
      return;
    }

    // Send the POST request.
    updateUser(updatedUser, $userId.val());
  });
});

const updateUser = async (updatedUser, userId) => {
  await $.ajax({
    url: "/api/user",
    type: "PUT",
    data: updatedUser
  });

  // console.log(data);
  window.location.replace(`/user/${userId}`);
};

const getUser = async () => {
  await $.get(`/api/user/${$userId}`, userData => {
    $userEmail.val(userData.email).trim();
    $userPassword.val(userData.password).trim();
    $userFirstName.val(userData.firstName).trim();
    $userLastName.val(userData.lastName).trim();
    $userTwitter.val(userData.twitterURL).trim();
    $userLinkedIn.val(userData.linkedinURL).trim();
    $userGitHub.val(userData.githubURL).trim();
  });
};
