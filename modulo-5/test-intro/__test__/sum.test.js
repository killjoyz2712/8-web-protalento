const suma = require('../suma');

test("Sumar 1 + 3 debe ser igual a 4",()=>{
    expect(suma(1,3)).toBe(4);
})

test("Sumar a + b debe ser igual a 0",()=>{
    expect(suma("adriad","badria")).toBe(0);
})