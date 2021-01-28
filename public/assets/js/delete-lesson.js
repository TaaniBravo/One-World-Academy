const lesson = $("#delete-button");
const lessonId = lesson.attr("data-lesson");

$(document).ready(() => {
  $(".lessons").on("click", ".delete-button", async function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const lesson = {
      id: $(this).data("lesson")
    };

    const value = await swal("Please confirm you want to delete...", {
      buttons: {
        cancel: "Nevermind",
        delete: "Begone!"
      }
    });

    switch (value) {
      case "cancel":
        break;

      case "delete":
        swal("Gotcha", "Deleting...", "success");
        setTimeout(() => {
          deleteLesson(lesson);
        }, 1500);

        break;

      default:
        break;
    }
  });
});

// This function does an API call to delete posts
const deleteLesson = async lesson => {
  await $.ajax({
    method: "DELETE",
    url: `/api/lessons/${lesson.id}`,
    data: lesson
  });

  window.location.replace("/user");
};
