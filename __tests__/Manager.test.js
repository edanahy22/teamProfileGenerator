const Manager = require("../lib/Manager");
const manager= new Manager('Elaine', '123', 'edanahy@gmail.com', '5')

test('can create manager object', ()=>{
    const M = new Manager();
     expect(typeof (M)).toBe('object');
})

test('can set constructor values for manager object', ()=>{
    expect(manager.name).toBe('Elaine');
    expect(manager.id).toBe('123');
    expect(manager.email).toBe('edanahy@gmail.com');
    expect(manager.officeNumber).toBe('5');
})

test('can get office number via getOfficeNumber()', ()=>{
    expect(manager.getOfficeNumber()).toBe('5');
}) 


test('can get role via getRole()', ()=>{
    expect(manager.getRole()).toBe('Manager');
}) 