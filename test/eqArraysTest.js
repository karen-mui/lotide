const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays(["2", 5, "10"], ["2", 5, "10"]), true); 