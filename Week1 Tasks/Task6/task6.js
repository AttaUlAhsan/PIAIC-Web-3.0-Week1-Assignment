// 6.	Stripping Names: Store a person’s name, and include some whitespace characters at the beginning 
// and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. 
// Print the name once, so the whitespace around the name is displayed. 
// Then print the name after striping the white spaces.
var person_name = "Atta Ul Ahsan";
console.log("".concat(person_name));
var my_name = "\tAtta Ul Ahsan    \n";
console.log("".concat(my_name));
console.log(my_name.trim());
