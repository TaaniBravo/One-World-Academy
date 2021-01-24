$(document).ready(() => {
  $("#create-course-btn").on("submit", event => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    const newCourse = {
      title: $(".courseTitle")
        .val()
        .trim(),
      category: $("#courseCategory").val(),
      courseImage: $("#courseImage").val(),
      courseDescription: $(".courseBio")
        .val()
        .trim(),
      UserId: req.user.id
    };

    if (
      !newCourse.title ||
      !newCourse.category ||
      !newCourse.courseImage ||
      !newCourse.courseDescription ||
      !newCourse.UserId
    ) {
      return;
    }

    // Send the POST request.
    $.ajax("/api/course", {
      type: "POST",
      data: newCourse
    }).then(() => {
      console.log("created new course");
      // Reload the page to get the updated list
      location.replace(`/course/${req.params.id}`);
    });
  });
});
