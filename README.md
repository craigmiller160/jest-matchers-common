# Jest Matchers (Common)

Some common custom matchers I've written for jest.

## To Setup

In a setup file that runs before the jest test suite, include this line:

```
import '@craigmiller160/jest-matchers-common';
```;

## The Matchers

| Matcher Name | Description |
|--------------|-------------|
| stringsEqualIgnoreWhitespace | Compare two strings and see if they are equal, ignoring any whitespace characters. |

## Jest Global Type Definitions

The matchers won't be recognized by Jest's global type definition. To get past this, there must be a `global.d.ts` file in the root of the `src` directory of the consuming project, and in that file do the following:

```
import '@craigmiller160/jest-matchers-common/lib/global';
```
