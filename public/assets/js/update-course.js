const $title = $("input#courseTitle");
const $category = $("#courseCategory");
const $courseImage = $("input#courseImage");
const $courseDescription = $("input#courseDescription");
const $courseId = $("label#data").data("course");

$(document).ready(async () => {
  getCourse();

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

const updateCourse = async updatedCourse => {
  await $.put("/api/courses", updatedCourse, () => {
    window.location.replace("/user");
  });
};

const getCourse = async () => {
  await $.get(`/api/courses/${$courseId}`, courseData => {
    console.log(courseData);
    $title.val(courseData.title);
    $category.val(courseData.category);
    $courseImage.val(courseData.courseImage);
    $courseDescription.val(courseData.courseDescription);
  });
};
