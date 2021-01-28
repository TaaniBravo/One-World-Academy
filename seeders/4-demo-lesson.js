"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Lessons", [
      {
        id: 1,
        lessonTitle: "Element",
        lecture:
          "An HTML element is a type of HTML (Hypertext Markup Language) document component, one of several types of HTML nodes (there are also text nodes, comment nodes and others). HTML document is composed of a tree of simple HTML nodes, such as text nodes, and HTML elements, which add semantics and formatting to parts of document (e.g., make text bold, organize it into paragraphs, lists and tables, or embed hyperlinks and images). Each element can have HTML attributes specified. Elements can also have content, including other elements and text.",
        createdAt: new Date(),
        updatedAt: new Date(),
        CourseId: 1,
        UserId: 1
      },

      {
        id: 2,
        lessonTitle: "Class and id",
        lecture:
          "In CSS, a class is a group of elements that are the same or similar. You can have as many elements as you want in a class. And each element can be the member of multiple classes. Every class has CSS attributes (like color and font-size) that are specific to that class. An ID is a singular identifier of one HTML tag. You can only have one HTML tag per ID and each HTML tag can only have one ID. Each ID has a specific set of CSS attributes that only apply to that one element.",
        createdAt: new Date(),
        updatedAt: new Date(),
        CourseId: 2,
        UserId: 1
      },
      {
        id: 3,
        lessonTitle: "Variables",
        lecture:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        createdAt: new Date(),
        updatedAt: new Date(),
        CourseId: 3,
        UserId: 1
      },

      {
        id: 4,
        lessonTitle: "Array",
        lecture:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        createdAt: new Date(),
        updatedAt: new Date(),
        CourseId: 3,
        UserId: 1
      },
      {
        id: 5,
        lessonTitle: "Objects",
        lecture:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        createdAt: new Date(),
        updatedAt: new Date(),
        CourseId: 3,
        UserId: 1
      },

      {
        id: 6,
        lessonTitle: "Functions",
        lecture:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        createdAt: new Date(),
        updatedAt: new Date(),
        CourseId: 3,
        UserId: 1
      },

      {
        id: 7,
        lessonTitle: "Use of var, const, and let",
        lecture:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        createdAt: new Date(),
        updatedAt: new Date(),
        CourseId: 3,
        UserId: 1
      },

      {
        id: 8,
        lessonTitle: "Array",
        lecture:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        createdAt: new Date(),
        updatedAt: new Date(),
        CourseId: 4,
        UserId: 1
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Lessons", null, {});
  }
};
