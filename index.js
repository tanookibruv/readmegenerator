const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Name your README file.',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Describe your project.',
            name: 'description',
        },

    ])