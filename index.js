const inquirer = require("inquirer");
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const generatePage = require('./src/page-template.js')
const { writeFile, copyFile } = require('./utils/generate-site.js')

const directory = [];

const promptOption = [
  {
    type: "checkbox",
    name: "option",
    message:
      "Would you like to add an Engineer, Intern, or Finish building team? (Required - Please select one option)",
    choices: ["Engineer", "Intern", "Finish"],
    validate(answer) {
      if (answer.length < 1) {
        return 'You must choose an option.';
      }

      return true;
    },
  },
];

const managerInput = [
  {
    type: "input",
    name: "managerName",
    message: "Team Manager Name? (Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter a name");
        return false;
      }
    }
  },
  {
    type: "input",
    name: "managerId",
    message: "Team Manager Id?",
    default: '000'
  },
  {
    type: "input",
    name: "managerEmail",
    message: "Team Manager email?",
    default: 'example@example.com'
  },
  {
    type: "input",
    name: "officeId",
    message: "Office number?",
    default: '123'
  },
];

const employeeInput = [
  {
    type: "input",
    name: "employeeName",
    message: "Employee's Name? (Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter a name");
        return false;
      }
    }
  },
  {
    type: "input",
    name: "employeeId",
    message: "Employee's Id?",
    default: '001'
  },
  {
    type: "input",
    name: "employeeEmail",
    message: "Employee's Email?",
    default: 'employee@employee.com'
  },
  {
    type: "input",
    name: "employeeGithub",
    message: "Employee's Github Username?",
    default: 'emdok'
  },
];

const internInput = [
  {
    type: "input",
    name: "internName",
    message: "Intern's Name? (Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter a name");
        return false;
      }
    }
  },
  {
    type: "input",
    name: "internId",
    message: "Intern's Id?",
    default: '002'
  },
  {
    type: "input",
    name: "internEmail",
    message: "Intern's Email?",
    default: 'intern@example.edu'
  },
  {
    type: "input",
    name: "internSchool",
    message: "Intern's School?",
    default: 'University of Oregon'
  },
];

function managerPrompt() {
  return inquirer.prompt(managerInput).then((answers) => {
      const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeId);
      manager.role = manager.getRole();
      directory.push(manager);
  });
};

function prompt() {
    return inquirer.prompt(promptOption).then((answers) => {

        if (answers.option[0] === 'Engineer') {
            inquirer.prompt(employeeInput).then((answers) => {
                const engineer = new Engineer(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.employeeGithub);
                engineer.role = engineer.getRole();
                directory.push(engineer);
                prompt();
            });
        };

        if (answers.option[0] === 'Intern') {
            inquirer.prompt(internInput).then((answers) => {
                const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
                intern.role = intern.getRole();
                directory.push(intern);
                prompt();
            })
        };

        if (answers.option[0] === 'Finish') {
          writeFile(generatePage(directory));
          copyFile();
        };

    });
};

managerPrompt().then(prompt)
