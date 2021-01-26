const $title = $("input#courseTitle");
const $category = $("#courseCategory");
const $courseImage = $("input#courseImage");
const $courseDescription = $("input#courseDescription");
const $courseId = $("label#data").data("course");

$(document).ready(() => {
  // Once the document is ready the current data for the course is appended.
  getCourse();

  $("form").on("submit", event => {
    event.preventDefault();

    const updatedCourse = {
      id: $courseId,
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

    console.log(updatedCourse);
    // Send the PUT request.
    updateCourse(updatedCourse);
  });
});

const updateCourse = async updatedCourse => {
  await $.ajax({
    url: "/api/courses",
    type: "PUT",
    data: updatedCourse
  });

  // console.log(data);
  window.location.replace(`/courses/${$courseId}`);
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
