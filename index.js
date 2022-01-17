const inquirer = require("inquirer");
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const directory = [];

const promptOption = [
  {
    type: "checkbox",
    name: "option",
    message:
      "Would you like to add an Engineer, Intern, or Finish building team?",
    choices: ["Engineer", "Intern", "Finish"],
  },
];

const managerInput = [
  {
    type: "input",
    name: "managerName",
    message: "Team Manager Name?",
  },
  {
    type: "input",
    name: "managerId",
    message: "Team Manager Id?",
  },
  {
    type: "input",
    name: "managerEmail",
    message: "Team Manager email?",
  },
  {
    type: "input",
    name: "officeId",
    message: "Office number?",
  },
];

const employeeInput = [
  {
    type: "input",
    name: "employeeName",
    message: "Employee's Name?",
  },
  {
    type: "input",
    name: "employeeId",
    message: "Employee's Id?",
  },
  {
    type: "input",
    name: "employeeEmail",
    message: "Employee's Email?",
  },
  {
    type: "input",
    name: "employeeGithub",
    message: "Employee's Github Username?",
  },
];

const internInput = [
  {
    type: "input",
    name: "internName",
    message: "Intern's Name?",
  },
  {
    type: "input",
    name: "internId",
    message: "Intern's Id?",
  },
  {
    type: "input",
    name: "internEmail",
    message: "Intern's Email?",
  },
  {
    type: "input",
    name: "internSchool",
    message: "Intern's School?",
  },
];

function managerPrompt() {
  return inquirer.prompt(managerInput).then((answers) => {
      const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeId);
      directory.push(manager);
  });
};

function prompt() {
    return inquirer.prompt(promptOption).then((answers) => {
        console.log(answers.option[0]);

        if (answers.option[0] === 'Engineer') {
            inquirer.prompt(employeeInput).then((answers) => {
                const engineer = new Engineer(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.employeeGithub);
                directory.push(engineer);
                prompt();
            });
        };

        if (answers.option[0] === 'Intern') {
            inquirer.prompt(internInput).then((answers) => {
                const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
                directory.push(intern);
                prompt();
            })
        };

        if (answers.option[0] === 'Finish') {
          console.log(directory);
        };

    });
};

managerPrompt().then(prompt);

