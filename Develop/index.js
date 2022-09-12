// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is the Title of your project?",
  },
  {
    type: "input",
    name: "Desc",
    message: "What is the Description of your project?",
  },
  {
    type: "input",
    name: "Isntallation",
    message: "What is required to intall and run this project?",
  },
  {
    type: "input",
    name: "Uasage",
    message: "write out the intended purpose and usage of this project?",
  },
  {
    type: "list",
    name: "Licence",
    message: "Which License do you want to use?",
    choices: ["MIT", "Unlicence", "Mozilla", "IBM", "Apache"]
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
    name: "GithubUsername",
    message: "what is your Github URL?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  }
];

// TODO: Create a function to write README file
function writeToFile(answers) {
  //fileName, data
  fs.writeFile("README.md", JSON.stringify(answers), (err) =>
      err ? console.log(err) : console.log("read me successfully created! :)")
    );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile(answers)
  });
}

// Function call to initialize app
init();
