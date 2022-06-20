const Engineer = require("../lib/Engineer");
const engineer= new Engineer('Elaine', '123', 'edanahy@gmail.com', 'edanahy22')

test('can create engineer object', ()=>{
    const E = new Engineer();
     expect(typeof (E)).toBe('object');
})

test('can set constructor values for engineer object', ()=>{
    expect(engineer.name).toBe('Elaine');
    expect(engineer.id).toBe('123');
    expect(engineer.email).toBe('edanahy@gmail.com');
    expect(engineer.github).toBe('edanahy22');
})

test('can get name via getGithub()', ()=>{
    expect(engineer.getGithub()).toBe('edanahy22');
}) 

test('can get role via getRole()', ()=>{
    expect(engineer.getRole()).toBe('Engineer');
}) 