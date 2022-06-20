const Employee = require("../lib/Employee");
const employee= new Employee('Elaine', '123', 'edanahy@gmail.com')

test('can create employee object', ()=>{
    const E = new Employee();
     expect(typeof (E)).toBe('object');
})

test('can set constructor values for employee object', ()=>{
    expect(employee.name).toBe('Elaine');
    expect(employee.id).toBe('123');
    expect(employee.email).toBe('edanahy@gmail.com');
})

test('can get name via getname()', ()=>{
    expect(employee.getName()).toBe('Elaine');
}) 

test('can get id via getId()', ()=> {
    expect(employee.getId()).toBe('123');
})

test('can get email via getEmail()', ()=>{
    expect(employee.getEmail()).toBe('edanahy@gmail.com');
}) 

test('can get role via getRole()', ()=>{
    expect(employee.getRole()).toBe('Employee');
}) 