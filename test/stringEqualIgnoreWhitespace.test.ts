import '../src';

describe('stringEqualIgnoreWhitespace', () => {
    it('is equal', () => {
        const text = `
            Hello
                World
            Hello
                Universe        
        `;
        expect(text).stringEqualIgnoreWhitespace(text);
    });

    it('is not equal', () => {
        const expected = `
            Hello
                World
            Hello
                Universe        
        `;
        const actual = `
            Hello
            World
            Hello
            Universe
        `;
        expect(actual).stringEqualIgnoreWhitespace(expected);
    });

    it('expected not string', () => {
        throw new Error();
    });

    it('received not string', () => {
        throw new Error();
    });
});
