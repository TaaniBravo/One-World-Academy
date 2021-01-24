$(document).ready(() => {
  const $lessonForm = $("form");
  const $courseId = $("#course");
  const $lessonTitle = $("input#lessonTitle");
  const $lecture = $("input#lessonDescription");

  console.log('hello')

  $lessonForm.on("submit", event => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newLesson = {
      CourseId: $courseId.val(),
      lessonTitle: $lessonTitle.val(),
      lecture: $lecture.val()
    };

    if (!newLesson.CourseId || !newLesson.lessonTitle || !newLesson.lecture) {
      return;
    }

    // Send the POST request.
    createLesson(newLesson, $courseId.val());
  });
});

const createLesson = async (newLesson, courseId) => {
  await $.post("/api/lessons", newLesson, () => {
    window.location.replace(`/courses/${courseId}`);
  });
};
