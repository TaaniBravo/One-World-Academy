$(document).ready(() => {
  $("#create-course-btn").on("submit", event => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("Check");
    const newCourse = {
      title: $(".courseTitle")
        .val()
        .trim(),
      category: $("#courseCategory").val(),
      description: $(".courseBio")
        .val()
        .trim()
    };

    console.log(newCourse);

    // Send the POST request.
    $.ajax("/api/course", {
      type: "POST",
      data: newCourse
    }).then(() => {
      console.log("created new course");
      // Reload the page to get the updated list
      //   location.replace(/course/:newCourse.title)
    });
  });
});
