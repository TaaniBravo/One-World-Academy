$(document).ready(() => {
  $("#create-lesson-btn").on("submit", event => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("Check");
    const newLesson = {
      course_id: $("#course")
        .val()
        .trim(),
      title: $("#lessonTitle").val(),
      lecture: $("#lessonDescription")
        .val()
        .trim()
    };

    console.log(newLesson);

    // Send the POST request.
    $.ajax("/api/lesson", {
      type: "POST",
      data: newLesson
    }).then(() => {
      console.log("created new lesson");
      // Reload the page to get the updated list
      //   location.replace(/course/:newCourse.title)
    });
  });
});
