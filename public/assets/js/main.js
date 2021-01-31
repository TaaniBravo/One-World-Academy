$(document).ready(() => {
  $(".profile-pic").on("click", event => {
    event.preventDefault();
    // This sends the user to the /user route
    window.location.replace("/user");
  });
});
