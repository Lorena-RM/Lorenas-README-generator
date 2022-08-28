// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', json.stringify(fileName, data), (err) =>
    err ? console.log(err) : console.log("read me successfully created! :)" )
    );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
