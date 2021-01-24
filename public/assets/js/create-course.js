$(document).ready(() => {
  const $title = $("#courseTitle")
    .val()
    .trim();
  const $category = $("#courseCategory")
    .val()
    .trim();
  const $courseImage = $("#courseImage")
    .val()
    .trim();
  const $courseDescription = $("#courseDescription")
    .val()
    .trim();

  $("#create-course-btn").on("submit", event => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newCourse = {
      title: $title,
      category: $category,
      courseImage: $courseImage,
      courseDescription: $courseDescription,
      UserId: req.user.id
    };

    if (
      !newCourse.title ||
      !newCourse.category ||
      // !newCourse.courseImage ||
      !newCourse.courseDescription ||
      !newCourse.UserId
    ) {
      return;
    }

    // Send the POST request.
    createCourse(newCourse);
  });
});

const createCourse = async newCourse => {
  await $.post("/api/create-course", newCourse);
  // Reload the page to get the updated list
  try {
    window.location.replace(`/courses/${req.params.id}`);
    // If there's an error, log the error
  } catch (err) {
    console.log(err);
  }
};
