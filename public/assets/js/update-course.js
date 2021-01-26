$(document).ready(() => {
  const $title = $("input#courseTitle");
  const $category = $("#courseCategory");
  const $courseImage = $("input#courseImage");
  const $courseDescription = $("input#courseDescription");

  $("form").on("submit", event => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newCourse = {
      title: $title.val(),
      category: $category.val(),
      courseImage: $courseImage.val(),
      courseDescription: $courseDescription.val()
    };

    if (
      !newCourse.title ||
      !newCourse.category ||
      !newCourse.courseDescription
    ) {
      return;
    }

    // Send the POST request.
    createCourse(newCourse);
  });
});

const createCourse = async newCourse => {
  await $.put("/api/courses", newCourse, () => {
    window.location.replace("/user");
  });
};