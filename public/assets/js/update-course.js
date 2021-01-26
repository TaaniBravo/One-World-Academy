$(document).ready(() => {
  const $title = $("input#courseTitle");
  const $category = $("#courseCategory");
  const $courseImage = $("input#courseImage");
  const $courseDescription = $("input#courseDescription");

  $("form").on("submit", event => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const updatedCourse = {
      title: $title.val(),
      category: $category.val(),
      courseImage: $courseImage.val(),
      courseDescription: $courseDescription.val()
    };

    if (
      !updatedCourse.title ||
      !updatedCourse.category ||
      !updatedCourse.courseDescription
    ) {
      return;
    }

    // Send the POST request.
    updateCourse(updatedCourse);
  });
});

const createCourse = async updatedCourse => {
  await $.put("/api/courses", updatedCourse, () => {
    window.location.replace("/user");
  });
};
