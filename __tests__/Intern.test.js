const Intern = require("../lib/Intern");
const intern= new Intern('Elaine', '123', 'edanahy@gmail.com', 'Northwestern')

test('can create Intern object', ()=>{
    const I = new Intern();
     expect(typeof (I)).toBe('object');
})

test('can set constructor values for Intern object', ()=>{
    expect(intern.name).toBe('Elaine');
    expect(intern.id).toBe('123');
    expect(intern.email).toBe('edanahy@gmail.com');
    expect(intern.school).toBe('Northwestern')
})

test('can get name via getSchool()', ()=>{
    expect(intern.getSchool()).toBe('Northwestern');
}) 


test('can get role via getRole()', ()=>{
    expect(intern.getRole()).toBe('Intern');
}) 