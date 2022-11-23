# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @karen-mui/lotide`

**Require it:**

`const _ = require('@karen-mui/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: asserts if two arrays are equal
* `assertEqual(actual, expected)`: asserts if two values are equal
* `assertObjectsEqual(actual, expected)`: asserts if two objects are equal
* `countLetters()`: counts the number of letters in a string
* `countOnly`: counts and returns the occurence of a specific subset of items within an object
* `eqArrays`: compares the equality of two arrays
* `eqObjects`: compares the equality of two arrays
* `findKey`: searches an object and returns the first key which the callback returns truthy
* `findKeyByValue`: searches an object for a value and returns the matching key
* `head`: returns the first element of an array
* `letterPositions`: returns the indices of each character in the string
* `map`: returns a new array with the results of applying a callback function on the original array
* `middle`: returns the middle element of an array
* `tail`: returns an array with every element but the first
* `takeUntil`: returns an array populated with elements up until the callback returns truthy
* `without`: removes elements from an array