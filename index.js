/* 
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
*/

const inquirer = require('inquirer');
const fs = require('fs');
const { dir } = require('console');
const directory = [];


const promptOption = [
    {
        type: 'checkbox',
        name: 'option',
        message: 'Would you like to add a Manager, Engineer, Intern, or Finish building team?',
        choices: ['Manager', 'Engineer', 'Intern', 'Finish'],
    }
];

const managerInput = [
    {
        type: 'input',
        name: 'manager',
        message: 'Team Manager Name?'
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'Team Manager Id?'
    },
    {
        type: 'input',
        name: 'mangerEmail',
        message: 'Team Manager email?'
    },
    {
        type: 'input',
        name: 'officeId',
        message: 'Office number?'
    }
  ];

const employeeInput = [
    {
        type: 'input',
        name: 'employee',
        message: "Employee's Name?"
    },
    {
        type: 'input',
        name: 'employeeId',
        message: "Employee's Id?"
    },
    {
        type: 'input',
        name: 'employeeEmail',
        message: "Employee's Email?"
    },
    {
        type: 'input',
        name: 'employeeGithub',
        message: "Employee's Github Username?"
    }
];

function prompt() {
    inquirer.prompt(promptOption).then((answers) => {
        console.log(answers.option[0]);

         if (answers.option[0] === 'Manager') {
            inquirer.prompt(managerInput).then((answers) => {
                const manager = answers;
                manager.type = "manager";
                directory.push(manager);
                prompt();
            })
        };

        if (answers.option[0] === 'Engineer') {
            inquirer.prompt(employeeInput).then((answers) => {
                const engineer = answers;
                engineer.type = 'engineer';
                directory.push(engineer);
                prompt();
            });
        };

        if (answers.option[0] === 'Intern') {
            inquirer.prompt(employeeInput).then((answers) => {
                const intern = answers;
                intern.type = 'intern';
                directory.push(intern);
                prompt();
            })
        };

        if (answers.option[0] === 'Finish') {
            // TODO: Write a function to end program
            console.log(directory);
        };

    });
};

prompt();
