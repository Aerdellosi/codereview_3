
# Mr. Roger's message from the whirlpool under the mount

This program will take in a positive integer input from the user and output a list of values between 0 and the user's input which certain values replaced; if a value contains a '3', it will be replaced with "Won't you be my neighbor?", if the value contains a '2', it will be replaced with "Boop!", and if the value contains a '1', it will replaced with "Beep!". These will be displayed to the user below the input form.

## Authors

Aerdellosi

## Languages Used

* HTML
* CSS
* Javascript


## Github 

<https://github.com/Aerdellosi/codereview_3.git>

## Setup Instructions

1. Download vscode
2. Clone or fork/clone to your github/local directory
3. Install vscode extension Live Server through the vscode extensions portal
4. Launch with Live Server to a local port in your browser

## Known Bugs
1/20/2022  
If the user submits an input that is long enough, the output that clips below the initial viewport will escape its containing div.

## Licenses

Copyright: Aerdellosi, Cloud in Head Studios  
Date: 1/14/2022  
License: Unlicensed. Have fun.



















TDD::::

Describe: numberToConditionalArray()

test: "it will convert a string to an integer"
code: const string
      const int = parseInt(string)
expected output: integer

test: "it will run a for loop from 0 to integer and output i to an empty array"
code:   const array = []
        for (let i = 0; i < int; i++)
        array.push(i);
expected output: seeded array

test: "it will run a forEach loop through the array and cast all elements to strings"
code: array.forEach(element, function(element) {
    element.toString();
});
expected output:

test: "it will run a forEach loop through the array and cast all elements to strings, and then
check to see if an element contains a 3, and if it does, it will change that element to "Won't you be my neighbor?"
code: element.contains("3");
expected output: "Won't you be my neighbor?"

test: "it will run a forEach loop through the array and cast all elements to strings, and then
check to see if an element contains a 3, and if it does, it will change that element to "Won't you be my neighbor? Else, if it contains a two, it will be converted to Boop!"
code:element.contains("2");
expected output: "Boop!"

test: "it will run a forEach loop through the array and cast all elements to strings, and then
check to see if an element contains a 3, and if it does, it will change that element to "Won't you 
be my neighbor? Else, if it contains a two, it will be converted to Boop! Else, if it contains a
one, it will be converted to Beep!"
code:element.contains("1");
expected output: "Beep!"