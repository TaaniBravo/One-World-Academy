$(document).ready(() => {
  const $quizForm = $("#quizForm");
  const $lessonId = $("#lessonId");
  const $lessonTitle = $("input#lessonTitle");
  const $lecture = $("input#lessonDescription");

  $quizForm.on("submit", event => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newQuiz = {
      quizTitle: $quizTitle.val(),
      lesson: $lessonId.val()
    };

    if (!newQuiz.CourseId || !newQuiz.lessonTitle) {
      return;
    }

    // Send the POST request.
    createQuiz(newQuiz);
  });
});

const createLesson = async newQuiz => {
  await $.post("/api/quizzes", newQuiz, () => {
    window.location.replace("/create-question");
  });
};
