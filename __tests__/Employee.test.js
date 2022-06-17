const Employee = require("../lib/Employee");

test('can create employee object', ()=>{
    const E = new Employee();
     expect(typeof (E)).toBe('object');
})

test('can set name via constructor argument', ()=>{
    const name = 'Elaine';
    const E = new Employee(name);
     expect(E.name).toBe(name);
})

test('can get name via getname()', ()=>{
    const testValue = 'Oliver';
    const E = new Employee(testValue);
    expect(E.getName()).toBe(testValue);
}) 