// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the Title of your project?",
  },
  {
    type: "input",
    name: "desc",
    message: "What is the Description of your project?",
  },
  {
    type: "input",
    name: "installation",
    message: "What is required to intall and run this project?",
  },
  {
    type: "input",
    name: "usage",
    message: "write out the intended purpose and usage of this project?",
  },
  {
    type: "list",
    name: "license",
    message: "Which License do you want to use?",
    choices: ["MIT", "Unlicense", "Mozilla", "IBM", "Apache", "None"],
  },
  {
    type: "input",
    name: "contributors",
    message: "who contributed to this proejct?",
  },
  {
    type: "input",
    name: "tests",
    message: "What are the tests intended for this project?",
  },
  {
    type: "input",
    name: "githubusername",
    message: "what is your Github Username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
];

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log('writing new file...')
    return fs.writeFileSync(
      path.join(process.cwd(), "GeneratedReadme.md"),
      generateMarkdown(answers)
    );
  });
}

// Function call to initialize app
init();
