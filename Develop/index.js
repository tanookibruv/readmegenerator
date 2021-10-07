const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

//Array of questions asked through inquirer
const questions = [
    {
        type: 'input',
        message: 'Please enter your GitHub username.',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a description about your project.',
        name: 'description',
    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'What command should be run to install dependecies?',
        default: 'npm i',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        default: 'npm test',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What do future users need to know about the repo?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What do future users need to know about contributing to the repo?',
        name: 'contributing',
    }
];

// funciton that generates the readme file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function that prompts questions and recieves responses
function init() {
    inquirer.prompt(questions).then((inquiereResponses) => {
        console.log('Generating README...')
        writeToFile('README.md', generateMarkdown({...inquiereResponses}));
    });
}

// function that begins app
init();
