const lesson = $("#delete-button");
const lessonId = lesson.attr("data-lesson");

$(lesson).on("click", event => {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  // console.log(`Id: ${lessonId}`);
  deleteLesson(lessonId);
});

// This function does an API call to delete posts
function deleteLesson(id) {
  $.ajax({
    method: "DELETE",
    url: "/api/courses/" + id
  }).then(() => {
    window.location.replace("/user");
  });
}
