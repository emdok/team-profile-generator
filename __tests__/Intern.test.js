const Employee = require('../lib/Intern.js');

test('Can I get employee name?', () => {
    const employee = new Employee('Emily');

    expect(employee.name).toEqual("Emily");
});

test('Can I get employee Id?', () => {
    const employee = new Employee('Emily', '123', 'test@example.com');

    expect(employee.id).toEqual("123");
});

test('Can I get employee email?', () => {
    const employee = new Employee('Emily', '123', 'test@example.com');

    expect(employee.email).toEqual("test@example.com");
});

test('Can I get employee school?', () => {
    const employee = new Employee('Emily', '123', 'test@example.com', 'University of Idaho');

    expect(employee.school).toEqual("University of Idaho");
});

test('Does getName Method get the name?', () => {
    const employee = new Employee('Emily', '123', 'test@example.com', 'University of Idaho');

    expect(employee.getSchool()).toEqual('University of Idaho');
});

test('Does getRole Method get the Role?', () => {
    const employee = new Employee('Emily', '123', 'test@example.com');

    expect(employee.getRole()).toEqual('Intern');
});