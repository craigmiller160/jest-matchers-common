/// <reference types="jest" />

declare namespace jest {
    interface Matchers<R> {
        readonly stringEqualIgnoreWhitespace: (expected: string) => R;
    }

    interface Expect {
        readonly stringEqualIgnoreWhitespace: (expected: string) => any;
    }
}