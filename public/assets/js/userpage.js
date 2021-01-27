const $aboutMeLink = $("li#aboutMe");

$(document).ready(() => {
  $aboutMeLink.after(`<li class="nav-item">
  <a class="nav-link" href="/create-course">Create Course</a>
</li>
<li class="nav-item">
  <a class="nav-link" href="/create-lesson">Create Lesson</a>
</li>
<li class="nav-item">
  <a class="nav-link" href="/update-user">Edit My Profile</a>
</li>`);

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
