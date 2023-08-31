// TODO: Include packages needed for this application

const {prompt} = require("inquirer");
const fs = require('fs')

//npm i inquirer
console.log('Lets get started')
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: "title",
    message: "What is the Title of your App?"
},
{
    type: 'input',
    name: "description",
    message: "What is it's purpose?"
},
{
    type: 'input',
    name: "use",
    message: "How do you use it?"
},
{
    type: 'input',
    name: "install",
    message: "Are there installation instructions?"
},
{
    type: 'list',
    name: "license",
    message: "What is the License of your App?",
    choices: ['MIT', 'ISC', 'GNUPLv3','None'],
  
    
},
];
writeToFile();
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName,data)
}

// TODO: Create a function to initialize app
function init() {}
prompt()
// Function call to initialize app
init();
