$(document).ready(() => {
  $("#signup-btn").on("submit", event => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("Check");
    const newUser = {
      first_name: $("#inputFirstName")
        .val()
        .trim(),
      last_name: $("#inputLastName").val(),
      email: $("#inputEmail")
        .val()
        .trim(),
      password: $("#inputPassword")
        .val()
        .trim(),
      profile_pic: null,
      bio: $("#inputBio")
        .val()
        .trim()
    };

    console.log(newUser);

    // Send the POST request.
    $.ajax("/api/user", {
      type: "POST",
      data: newUser
    }).then(() => {
      console.log("created new user");
      // Reload the page to get the updated list
      //   location.replace(/course/:newCourse.title)
    });
  });
});
