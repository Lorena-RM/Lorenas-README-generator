// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
];

// TODO: Create a function to write README file
function writeToFile(answers) {
  //fileName, data
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    fs.writeFile("README.md", JSON.stringify(answers), (err) =>
      err ? console.log(err) : console.log("read me successfully created! :)")
    );
  });
}

// Function call to initialize app
init();
