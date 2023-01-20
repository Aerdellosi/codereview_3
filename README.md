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