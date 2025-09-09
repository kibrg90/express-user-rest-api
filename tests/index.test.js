const assert = require('assert');

describe('Index Functionality', () => {
    it('should return the correct value for test case 1', () => {
        assert.strictEqual(1 + 1, 2);
    });

    it('should return the correct value for test case 2', () => {
        assert.strictEqual(2 * 2, 4);
    });

    it('should return the correct value for test case 3', () => {
        assert.strictEqual(3 - 1, 2);
    });

    it('should return the correct value for test case 4', () => {
        assert.strictEqual(6 / 2, 3);
    });
});