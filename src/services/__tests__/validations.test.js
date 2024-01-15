// TODO: Create tests suite for validation function
const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {
    test('should return true or false as the function is defined', () => {
        const result = isValid();
        expect(result).toBeDefined();
    });
});
test('should return false when gametag  length is length less than 8 characters', () => {
    const result = isValid('coloo');
    expect(result).toBeFalsy();
});

test('should return true when gametag  length is  equal to or greater than 8 characters', () => {
    const result = isValid('popopopopopp');
    expect(result).toBeTruthy();
});
