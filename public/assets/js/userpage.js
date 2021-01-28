const $aboutMeLink = $("li#profile");

$(document).ready(() => {
  $(".courses").on("click", ".delete-button", async function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const course = {
      id: $(this).data("course")
    };

    const value = await swal("Are you sure you want to delete this course?", {
      buttons: {
        cancel: "Nevermind",
        delete: "Begone!"
      }
    });

    switch (value) {
      case "cancel":
        break;

      case "delete":
        swal("Gotcha", "Course Deleted.", "success");
        setTimeout(() => {
          deleteCourse(course);
        }, 1500);

        break;

      default:
        break;
    }
  });

  // deleteCourse(course);

  $(".lessons").on("click", ".delete-button", async function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const lesson = {
      id: $(this).data("lesson")
    };

    const value = await swal("Are you sure you want to delete this lesson?", {
      buttons: {
        cancel: "Nevermind",
        delete: "Begone!"
      }
    });

    switch (value) {
      case "cancel":
        break;

      case "delete":
        swal("Gotcha", "Lesson Deleted.", "success");
        setTimeout(() => {
          deleteLesson(lesson);
        }, 1500);

        break;

      default:
        break;
    }
  });

  $("#delete-user-btn").on("click", async event => {
    event.preventDefault();

    const value = await swal("Are you sure you want to delete this course?", {
      buttons: {
        cancel: "Nevermind",
        delete: "Begone!"
      }
    });

    switch (value) {
      case "cancel":
        break;

      case "delete":
        swal("Sad to see you leave!", "Deleting Profile...", "success");
        setTimeout(() => {
          deleteProfile();
        }, 2000);

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
