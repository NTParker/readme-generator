const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./Develop/utils/generateMarkdown.js");

// Array of questions for user input
const questions = [
  {
    type: "input",
    message: "Please provide your GitHub username.",
    name: "username",
  },
  {
    type: "input",
    message: "Please provide your email address.",
    name: "email",
  },
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please provide a description of your project.",
    name: "description",
  },
  {
    type: "input",
    message:
      "Please provide instructions/requirements for installation of your project.",
    name: "install",
  },
  {
    type: "input",
    message: "Please provide instructions and examples for use of project.",
    name: "usage",
  },
  {
    type: "input",
    message: "Please provide guidelines for contributing to the project.",
    name: "contribute",
  },
  {
    type: "list",
    name: "license",
    message: "What licenses were used in the project?",
    choices: ["MIT", "Apache 2.0", "BSD", "GNU", "None"],
  },
  {
    type: "input",
    message: "Please provide a test (if any).",
    name: "test",
  },
  {
    type: "input",
    message:
      "Please provide instructions on how users should reach out with questions",
    name: "questions",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    console.log(fileName);
    console.log(data);
    if (err) {
      return console.log(err);
    } else {
      console.log("Success");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", generateMarkdown(data));
    console.log(data);
  });
}

// Function call to initialize app
init();
