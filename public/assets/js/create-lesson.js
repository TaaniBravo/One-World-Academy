$(document).ready(() => {
  const $courseId = $("#course");
  const $lessonTitle = $("input#LessonTitle");
  const $lecture = $("input#lessonDescription");

  console.log('hello')

  $("form").on("submit", event => {
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

    console.log(newLesson);

    // Send the POST request.
    // createLesson(newLesson);
  });
});

const createLesson = async newLesson => {
  await $.post("/api/lessons", newLesson, () => {
    window.location.replace(`/course/${$courseId.val()}`);
  });
};
