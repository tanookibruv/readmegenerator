const inquirer = require('inquirer');
const fs = require('fs');




inquirer
    .prompt ([
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github',

        },
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Describe your project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What kind of license should your project have?',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
            name: 'license',
        }
])
