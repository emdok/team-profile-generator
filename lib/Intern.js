const Employee = require('./Employee.js')

class Intern extends Employee {
    constructor(school) {
        super(name, email, id);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;