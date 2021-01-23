DROP DATABASE IF EXISTS owaDB;

CREATE DATABASE owaDB;

-- CREATE TABLE course (
--     id INT AUTO_INCREMENT NOT NULL,
--     title VARCHAR(255) NOT NULL,
--     author VARCHAR(255) NOT NULL,
--     category  VARCHAR(255) NOT NULL,
--     course_bio VARCHAR(255) NOT NULL,
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE lesson (
--     id INT AUTO_INCREMENT NOT NULL,
--     lesson_title VARCHAR(255) NOT NULL,
--     description VARCHAR(255) NOT NULL,
--     PRIMARY KEY (id),
--     FOREIGN KEY (course_id) REFERENCES course(id)
-- );

-- CREATE TABLE user (
--     id INT AUTO_INCREMENT NOT NULL,
--     email VARCHAR(255) NOT NULL,
--     password VARCHAR(255) NOT NULL,
--     user_bio VARCHAR(255) NOT NULL,
--     github VARCHAR(255) NOT NULL,
--     PRIMARY KEY (id),
--     FOREIGN KEY (course_id) REFERENCES course(id)
-- );

-- Table Users
-- email COLUMN string validate as email NOT NULL
-- password COLUMN string NOT NULL


-- Table Courses this will have a FK to users
-- title COLUMN string NOT NULL
-- lecture COLUMN text NOT NULL
-- FK to users table

-- Table Quizzes this will have a FK to Courses
-- apiId