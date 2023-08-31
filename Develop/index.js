// TODO: Include packages needed for this application

const {prompt} = require("inquirer");
const fs = require('fs')
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown")
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
    name: "install",
    message: "Are there installation instructions?"
},
{
    type: 'input',
    name: "use",
    message: "How do you use it?"
},
{
    type: 'list',
    name: "license",
    message: "What is the License of your App?",
    choices: ['MIT', 'ISC', 'GNUPLv3','None'],  
},
{
    type: 'input',
    name: "contribute",
    message: "How can others contribute to your App?",
},
{
    type: 'input',
    name: "quiz",
    message: "How can others test your App?"
},
{
    type: 'input',
    name: "email",
    message: "What is your email?"
},
{
    type: 'input',
    name: "github",
    message: "What is your GitHub username?"
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
return fs.writeFileSync(path.join(fileName),data)
}

// TODO: Create a function to initialize app
function init() {}
prompt(questions).then((response)=>{
    writeToFile("./output/README.md", generateMarkdown({...response}))
})
// Function call to initialize app
init();
