# Lotide
A ~~pale imitation~~ mini clone of the Lodash library (https://lodash.com/).

## Purpose

**_BEWARE:_ This library was created for learning purposes. It is _not_ intended for use in production grade software.** 

*(But if you do decide to use it, I will buy you cake)*

This project was created and published by me as a part of my learnings at Lighthouse Labs.

## Usage

**Install it:** Go to the terminal and type `npm install @open-meadow/lotide` in the desired folder. ( Just in case you're like me and you didn't know )
  
**Require it:** Open a new JavaScript file in VS Code (or your editor of choice) and type `const _ = require('@open-meadow/lotide');`. 

**Call it:** Type `console.log(_.tail([1,2,3]));`. It should output `[2,3]`. How you output JavaScript is up to you.

## Documentation ##

This library can run the following functions
* `.assertArraysEqual([array1],[array2])` : Lets you know if two arrays are equal.
* `.assertEqual(element1, element2)` : Lets you know if two elements are equal.
* `.assertObjectsEqual(object1, object2)` : Lets you know if two arrays are equal.
* `.countLetters(sentence)` : Counts the nummber of letters in a sentence.
* `.countOnly(array[], element)` : Counts the number of times 'element' is in 'array'
* `.findKeyByValue(object, value)`: Finds key in object based on provided value
* `.flatten(array)`: If provided a nested array, it returns an un-nested aray, with the values intact
* `.head(array)`: Returns the first value of an array.
* `.letterPositions(sentence, letter)`: Returns the position of a letter in a sentence.
* `.map(array)`: Will return the first letter of provided array of strings. Hopefully does not get in the way of Javascript's map function.
* `.middle(array)`: Finds the middle elements of provided array.
* `.tail(array)`: Returns everything after the first element of provided array.
* `.takeUntil(array, callback)`: Returns all elements of array that do not meet the callback function.
* `.without(array, itemsToRemove)`: Returns an array without items specified in parameter 2. 
