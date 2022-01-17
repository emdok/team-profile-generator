const Employee = require('../lib/Engineer.js');

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

test('Can I get employee github information?', () => {
    const employee = new Employee('Emily', '123', 'test@example.com', 'emdok');

    expect(employee.github).toEqual("emdok");
});

test('Does getGitHub Method get the name?', () => {
    const employee = new Employee('Emily', '123', 'test@example.com', 'emdok');

    expect(employee.getGithub()).toEqual('emdok');
});

test('Does getId Method get the Id?', () => {
    const employee = new Employee('Emily', '123', 'test@example.com');

    expect(employee.getId()).toEqual('123');
});

test('Does getRole Method get the Role?', () => {
    const employee = new Employee('Emily', '123', 'test@example.com');

    expect(employee.getRole()).toEqual('Engineer');
});