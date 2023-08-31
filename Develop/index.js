// TODO: Include packages needed for this application

const { default: inquirer } = require("inquirer");
const { default: Choices } = require("inquirer/lib/objects/choices");

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
    message: "What is the License of your App?"
    choices: ['MIT', 'ISC', 'GNUPLv3'],
    filter (choice) {
        return choice
    }
},
];
writeToFile();
// TODO: Create a function to write README file
async function writeToFile() { 
    return inquirer.prompt(questions);
}
      .then((answers)=> {
            console.log(answers)
        return answers    
        })
    .catch((error)=> {
        console.error();
      })   

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
