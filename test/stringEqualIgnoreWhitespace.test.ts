import '../src';

describe('stringEqualIgnoreWhitespace', () => {
    it('is equal', () => {
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
        expect(actual).stringsEqualIgnoreWhitespace(expected);
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
            Universe2
        `;
        try {
            expect(actual).stringsEqualIgnoreWhitespace(expected);
        } catch (ex) {
            return;
        }
        throw new Error('Expected error to be thrown');
    });

    it('expected not string', () => {
        const text = `
            Hello
                World
            Hello
                Universe        
        `;
        try {
            expect(text).stringsEqualIgnoreWhitespace(({} as unknown) as string);
        } catch (ex) {
            expect(ex.message).toEqual('Expected value is not a string');
            return;
        }
        throw new Error('Expected error to be thrown');
    });

    it('received not string', () => {
        const text = `
            Hello
                World
            Hello
                Universe        
        `;
        try {
            expect(({} as unknown) as string).stringsEqualIgnoreWhitespace(text);
        } catch (ex) {
            expect(ex.message).toEqual('Received value is not a string');
            return;
        }
        throw new Error('Expected error to be thrown');
    });
});
