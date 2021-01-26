const $lessonForm = $("form");
const $courseId = $("#course");
const $lessonTitle = $("input#lessonTitle");
const $lecture = $("input#lessonDescription");
const $lessonId = $("#data").data("lesson");

$(document).ready(() => {
  getLesson();

  $lessonForm.on("submit", event => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const updatedLesson = {
      id: $lessonId,
      CourseId: $courseId.val(),
      lessonTitle: $lessonTitle.val(),
      lecture: $lecture.val()
    };

    if (
      !updatedLesson.CourseId ||
      !updatedLesson.lessonTitle ||
      !updatedLesson.lecture
    ) {
      return;
    }

    // Send the POST request.
    updateLesson(updatedLesson, $courseId.val());
  });
});

const updateLesson = async (updatedLesson, courseId) => {
  await $.ajax({
    url: "/api/lessons",
    type: "PUT",
    data: updatedLesson
  });

  // console.log(data);
  window.location.replace(`/courses/${courseId}`);
};

const getLesson = async () => {
  await $.get(`/api/lessons/${$lessonId}`, lessonData => {
    console.log(lessonData);
    $lessonTitle.val(lessonData.lessonTitle);
    $courseId.val(lessonData.courseId);
    $lecture.val(lessonData.lecture);
  });
};
