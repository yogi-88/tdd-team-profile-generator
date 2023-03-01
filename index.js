const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
function createEngineer(team) {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",

            type: 'input',
            name: 'id',
            message: "What is the engineer's id?",

            type: 'input',
            name: 'email',
            message: "What is the engineer's email address?",

            type: 'input',
            name: 'github',
            message: "What is the engineer's github username?"
        }
    ]).then((engineerDetails) => {
        const engineer = new Engineer(engineerDetails.name, engineerDetails.id, engineerDetails.email, engineerDetails.githubUsername)
        team.push(engineer);
        createTeam(team);
    })
}

function createManager(team) {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Manager's name?",

            type: 'input',
            name: 'id',
            message: "What is the Manager's id?",

            type: 'input',
            name: 'email',
            message: "What is the Manager's email address?",

            type: 'input',
            name: 'officeNumber',
            message: "What is the Manager's office number?"
        }
    ]).then((managerDetails) => {
        const manager = new Manager(managerDetails.name, managerDetails.id, managerDetails.email, managerDetails.officeNumber)
        team.push(manager);
        createTeam(team);
    })
}

function createIntern(team) {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Intern's name?",

            type: 'input',
            name: 'id',
            message: "What is the Intern's id?",

            type: 'input',
            name: 'email',
            message: "What is the Intern's email address?",

            type: 'input',
            name: 'school',
            message: "What is the Intern's school name?"
        }
    ]).then((internDetails) => {
        const intern = new Intern(internDetails.name, internDetails.id, internDetails.email, internDetails.school)
        team.push(intern);
        createTeam(team);
    })
}

function createTeam(team) {
    inquirer.prompt([
        {
            type: 'list',
            name: 'memberChoice',
            message: "Which type of team memeber you want to add?",
            choices: [
                'Engineer',
                'Intern',
                "I don't want to add any more team member"
            ]
        }
    ]).then((choice) => {
        if (choice.memberChoice === 'Engineer') {
            createEngineer(team);
        } else if (choice.memberChoice === 'Intern') {
            createIntern(team);
        } else {
            // at this point, team array should have a manager and however many engineers and interns the user inputted
            const html = render(team); //html will be html file as string
            fs.writeFile(outputPath, html, (err) => {
                if (err){
                    console.log('Failed to write HTML file');
                }
            });
        }
    });
}
