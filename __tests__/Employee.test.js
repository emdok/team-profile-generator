const Employee = require('../lib/Employee.js');

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

test('Does getName Method get the name?', () => {
    const employee = new Employee('Emily', '123', 'test@example.com');

    expect(employee.getName()).toEqual('Emily');
});

test('Does getId Method get the Id?', () => {
    const employee = new Employee('Emily', '123', 'test@example.com');

    expect(employee.getId()).toEqual('123');
});

test('Does getEmail Method get the email?', () => {
    const employee = new Employee('Emily', '123', 'test@example.com');

    expect(employee.getEmail()).toEqual('test@example.com');
});

test('Does getRole Method get the Role?', () => {
    const employee = new Employee('Emily', '123', 'test@example.com');

    expect(employee.getRole()).toEqual('Employee');
});