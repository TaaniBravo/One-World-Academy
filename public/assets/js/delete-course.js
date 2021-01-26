$(".courses").on("click", ".delete-button", function(event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  console.log($(this).data("course"));
  // deleteCourse(course);
});

// This function does an API call to delete posts
function deleteCourse(id) {
  $.ajax({
    method: "DELETE",
    url: "/api/courses/" + id
  }).then(() => {
    window.location.replace("/user");
  });
}
