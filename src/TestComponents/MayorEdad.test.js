import {MayorEdad} from './MayorEdad';

describe ('Funcion MayorEdad en MayorEdad.js', () => {

    // Prueba cuando la edad es mayor o igual a 18
    test('La edad es mayor o igual a 18', () => {
        expect(MayorEdad(18)).toBe(true);
        expect(MayorEdad(100)).toBe(true);
    });

    // Prueba cuando la edad es menor de 18
    test('La edad es menor de 18', () => {
    expect(MayorEdad(10)).toBe(false);
    expect(MayorEdad(16)).toBe(false);
    expect(MayorEdad(17)).toBe(false);
    });

    // Prueba cuando se ingresa un número negativo
    test('Se ingresa un número negativo', () => {
    expect(MayorEdad(-5)).toBe(null);
    expect(MayorEdad(-10)).toBe(null);
    });

})