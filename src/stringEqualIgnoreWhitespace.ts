export default {
    stringEqualIgnoreWhitespace(received: string, expected: string) {
        // Type checks to support JavaScript
        if (typeof received !== 'string') {
            return {
                message: () => 'Received value is not a string',
                pass: false
            };
        }
        if (typeof expected !== 'string') {
            return {
                message: () => 'Expected value is not a string',
                pass: false
            };
        }

        const receivedNoWhitespace = received.trim().replace(/\s/g, '');
        const expectedNoWhitespace = expected.trim().replace(/\s/g, '');
        try {
            expect(receivedNoWhitespace).toEqual(expectedNoWhitespace);
            return {
                message: () => '',
                pass: true
            };
        } catch (ex) {
            return {
                message: () => ex.message,
                pass: false
            };
        }
    }
};
