$(document).ready(() => {
  $(".profile-pic").on("click", event => {
    event.preventDefault();

    window.location.replace("/user");
  });
});
