const $aboutMeLink = $("li#profile");

$(document).ready(() => {
  $(".courses").on("click", ".delete-button", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const course = {
      id: $(this).data("course")
    };

    deleteCourse(course);
  });

  $(".lessons").on("click", ".delete-button", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const lesson = {
      id: $(this).data("lesson")
    };

    deleteLesson(lesson);
  });

  $("#delete-user-btn").on("click", async event => {
    event.preventDefault();

    const value = await swal("Are you sure you want to delete your account?", {
      buttons: {
        cancel: "Nevermind",
        delete: "Begone!"
      }
    });

    switch (value) {
      case "cancel":
        break;

      case "delete":
        deleteProfile();
        break;

      default:
        break;
    }
  });
});

// This function does an API call to delete posts
const deleteCourse = async course => {
  await $.ajax({
    method: "DELETE",
    url: `/api/courses/${course.id}`,
    data: course
  });

  window.location.replace("/user");
};

// This function does an API call to delete posts
const deleteLesson = async lesson => {
  await $.ajax({
    method: "DELETE",
    url: `/api/lessons/${lesson.id}`,
    data: lesson
  });

  window.location.replace("/user");
};

const deleteProfile = async () => {
  await $.ajax({
    method: "DELETE",
    url: "/api/user_data"
  });

  window.location.replace("/");
};
