/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(a,b){
    "use strict";

    if(typeof a !== 'number' || typeof b !== 'number'){

        throw 'Invalid Input'
    }
    if(a === false || b === false){
        throw 'Invalid Input'
    }
    if(a < b){

        return b
    }
    else if(a > b){
        
        return a
    }
    else{
        
        return 'No max!'
    }
 
}


// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a,b,c){
    "use strict";

    if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number'){
        throw 'Invalid Input'
    }
    else if(a === false || b === false || c == false){
        throw 'Invalid Input'
    }
    else if(a > b && a > c){
        return a
    }else if(b > a && b > c){
        return b
    }else if(c > a && c > b ){
        return c
    }else{
        return 'No max!'
    }
    
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";

    if(typeof char !== 'string'){
        throw 'Invalid Input'
    }
    else if(char.length > 1){
        throw 'Invalid Input'
    }
    else if( char === 'a' || char === 'A'){
        return true
    }
    else if( char === 'e' || char === 'E'){
        return true
    }
    else if( char === 'i' || char === 'I'){
        return true
    }
    else if( char === 'o' || char === 'O'){
        return true
    }
    else if( char === 'u' || char === 'U'){
        return true
    }
    else{
        return false
    }
}

// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";

    var array =[];

    if(typeof phrase !== 'string'){
        throw 'Invalid Input'
    }
    else{
        for(var i = 0; i< phrase.length; i++){
            array.push(phrase[i]);
            array.push('o');
            array.push(phrase[i]);
        }
    }
    console.log(array.toString());
    return array.toString();
}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(){
    "use strict";
    //...
}

function multiply(){
    "use strict";
    //...
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(){
    "use strict";
    //...
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    //...
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    //...
}
