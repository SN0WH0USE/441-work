/*
HW-4; part 1
CONSOLE PRINTING OF FILENAMES

Directions: When this file is executed, it should print a multi-line string to the console. Line one should be blank.
(i.e. There should be a blank line between the node call, and the printing.
Line two should say: "`The name of this file is 01_printing.js`". Line three should say: "`Whoa, part 1 is done`".
Line 4 should be another blank line.

To accomplish the second line, you should use a template literal string, which references a variable which is set within your code to the filename.
(For example, your string might look like: ` `The name of this file is ${name_of_file}` `.
To access and set the filename you will need to use the global info variable as well as the "path" module.

All lines need to be created using a single log function. (i.e. you cannot call the log function more than 1 time.)

The file will be run with the following command (`node 01_printing.js`).
*/

// Start code below this line

//variable for filename
var name_of_file = '01_printing.js';

//variable as a multiline
var str_multiLine = `\nThe name of this file is ${name_of_file}.\nWhoa, part 1 is done.\n`;

// prints it to the console
console.log(str_multiLine);
