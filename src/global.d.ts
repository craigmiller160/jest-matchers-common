/// <reference types="jest" />

declare namespace jest {
    interface Matchers<R> {
        readonly stringsEqualIgnoreWhitespace: (expected: string) => R;
    }

    interface Expect {
        readonly stringsEqualIgnoreWhitespace: (expected: string) => any;
    }
}
