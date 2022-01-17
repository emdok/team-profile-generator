const Employee = require('../lib/Manager.js');

test('Can I get employee name?', () => {
    const employee = new Employee('Emily', '123', 'test@example.com', '456');

    expect(employee.name).toEqual("Emily");
});

test('Can I get employee id?', () => {
    const employee = new Employee('Emily', '123', 'test@example.com', '456');

    expect(employee.id).toEqual("123");
});

test('Can I get employee email?', () => {
    const employee = new Employee('Emily', '123', 'test@example.com', '456');

    expect(employee.email).toEqual("test@example.com");
});

test('Can I get employee officeNumber?', () => {
    const employee = new Employee('Emily', '123', 'test@example.com', '456');

    expect(employee.officeNumber).toEqual("456");
});

test('Can I get employee role of Manager?', () => {
    const employee = new Employee('Emily', '123', 'test@example.com', '456');

    expect(employee.getRole()).toEqual("Manager");
});