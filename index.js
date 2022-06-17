const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'index.html');
const team = [];

const buildTeam = () => {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(team), "utf-8");
}

const render = require("./src/page-template.js");


const addEngineer = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is your Engineer's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is your Engineer's ID number?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is your Engineer's email?",
            },
            {
                type: 'input',
                name: 'github',
                message: "What is your Engineer's Github Account?",
            }
        ])
        .then(answers => {
            console.log(answers);
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            team.push(engineer);
            console.log(team);
            createTeam();

        })
}



const createTeam = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'role',
                message: 'What role do you want to create?',
                choices: ['Engineer', 'Manager', 'Intern', 'No more team members'],
            },
        ])
        .then((answers) => {
            console.log(answers);
            switch (answers.role) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Manager':
                    addManager();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                default:
                    buildTeam();
            }
        })
        .catch((err) => {
            console.error(err);
        }
        );
}

createTeam();

