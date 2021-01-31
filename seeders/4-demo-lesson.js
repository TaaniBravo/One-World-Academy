"use strict";

// Insert some samples of lesson to database
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
          "JavaScript includes variables which hold the data value and it can be changed anytime. JavaScript uses reserved keyword var to declare a variable. A variable must have a unique name. You can assign a value to a variable using equal to (=) operator when you declare it or before using it. Multiple variables can also be declared in a single line separated by comma. JavaScript allows variable declaration without var keyword. You must assign a value when you declare a variable without var keyword. Scope of the variables declared without var keyword become global irrespective of where it is declared. Global variables can be accessed from anywhere in the web page.",
        createdAt: new Date(),
        updatedAt: new Date(),
        CourseId: 3,
        UserId: 1
      },

      {
        id: 4,
        lessonTitle: "Array",
        lecture:
          "We have learned that a variable can hold only one value, for example var i = 1, we can assign only one literal value to i. We cannot assign multiple literal values to a variable i. To overcome this problem, JavaScript provides an array. An array is a special type of variable, which can store multiple values using special syntax. Every value is associated with numeric index starting with 0. An array elements (values) can be accessed using index (key). Specify an index in square bracket with array name to access the element at particular index. Please note that index of an array starts from zero in JavaScript. Array includes 'length' property which returns number of elements in the array.",
        createdAt: new Date(),
        updatedAt: new Date(),
        CourseId: 3,
        UserId: 1
      },
      {
        id: 5,
        lessonTitle: "Objects",
        lecture:
          "Object is a non-primitive data type in JavaScript. It is like any other variable, the only difference is that an object holds multiple values in terms of properties and methods. Properties can hold values of primitive data types and methods are functions. In JavaScript, an object is a standalone entity because there is no class in JavaScript. However, you can achieve class like functionality using functions.",
        createdAt: new Date(),
        updatedAt: new Date(),
        CourseId: 3,
        UserId: 1
      },

      {
        id: 6,
        lessonTitle: "Functions",
        lecture:
          "In JavaScript, a function allows you to define a block of code, give it a name and then execute it as many times as you want. A JavaScript function can be defined using function keyword. A function can have one or more parameters, which will be supplied by the calling code and can be used inside a function. JavaScript is a dynamic type scripting language, so a function parameter can have value of any data type. You can pass less or more arguments while calling a function. If you pass less arguments then rest of the parameters will be undefined. If you pass more arguments then additional arguments will be ignored. All the functions in JavaScript can use arguments object by default. An arguments object includes value of each parameter.",
        createdAt: new Date(),
        updatedAt: new Date(),
        CourseId: 3,
        UserId: 1
      },

      {
        id: 7,
        lessonTitle: "Operators",
        lecture:
          "JavaScript includes operators as in other languages. An operator performs some operation on single or multiple operands (data value) and produces a result. For example 1 + 2, where + sign is an operator and 1 is left operand and 2 is right operand. + operator adds two numeric values and produces a result which is 3 in this case. JavaScript includes Arithmetic Operators, Comparison Operators, Logical Operators, Assignment Operators, and Conditional Operators. Arithmetic operators are used to perform mathematical operations between numeric operands. Comparison Operators compare two operands and return Boolean value true or false. Logical operators are used to combine two or more conditions. Assignment operators are to assign values to variables with less key strokes. JavaScript includes special operator called ternary operator :? that assigns a value to a variab",
        createdAt: new Date(),
        updatedAt: new Date(),
        CourseId: 3,
        UserId: 1
      },

      {
        id: 8,
        lessonTitle: "Module",
        lecture:
          "Module in Node.js is a simple or complex functionality organized in single or multiple JavaScript files which can be reused throughout the Node.js application. Each module in Node.js has its own context, so it cannot interfere with other modules or pollute global scope. Also, each module can be placed in a separate .js file under a separate folder. Node.js includes three types of modules: Core Modules, Local Modules, and Third Party Modules.",
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
