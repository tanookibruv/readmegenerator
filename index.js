const prompt = require('inquirer');
const fs = require('fs');
const promisify = require('util');
const writeFile = promisify(fs);


const questions = [
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
],

function promptQuestions() {
    return prompt(questions);
};

async function mainFunc() {
    try {
        const answers = await promptQuestions();

        const readme = generateREADME(answers);

        await writeFile('README.md', readme);
    } catch (err) {
        console.log(err)
    }
}


mainFunc();