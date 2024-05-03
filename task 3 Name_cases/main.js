// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, 
// and titlecase.
// let personname ="Abdul jabbar";
// console.log(personname.toLowerCase());
// console.log(personname.toUpperCase());
// console.log(personname.replace(/\b\w/g,(char) => char.toUpperCase()));
// let personname="Abdul jabbar"
// console.log(personname.toLowerCase());
// console.log(personname.toUpperCase())
// console.log(personname.replace(/\b\w/g,(char) => char.toUpperCase()))
var myname = "jabbar";
console.log(myname.toLowerCase());
console.log(myname.toUpperCase());
// console.log(myname.replace(/\b\w/g,(char) => char.toUpperCase()))
console.log(myname.replace(/\b\w/g, function (Char) { return Char.toLowerCase(); }));
