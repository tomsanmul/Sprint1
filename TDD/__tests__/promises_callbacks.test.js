describe(`Tests del getEmployee`, () => {
    test(`Espera simplement que torni una promise`, () => {
        expect(getEmployee(2)).toBeInstanceOf(Promise);
    });