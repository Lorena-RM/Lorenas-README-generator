const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const path = require("path");


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
    message: "who contributed to this project?",
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


function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log('writing new file...')
    return fs.writeFileSync(
      path.join(process.cwd(), "GeneratedReadme.md"),
      generateMarkdown(answers)
    );
  });
}


init();
