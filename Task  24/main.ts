// More Conditional Tests:  
// You don’t have to limit the number of tests you create to 10. If you want to try more 
// comparisons, write more tests. Have at least one True and one False result for each of the following: 
// • Tests for equality and inequality with strings 
// • Tests using the lower case function 
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal 
// to, and less than or equal to 
// • Tests using "and" and "or" operators 
// • Test whether an item is in an array 
//  • Test whether an item is not in an array

1// Equality and inequality
// let myNAme = "Abdul Jabbar"
// console.log(myNAme=="Abdul Jabbar")    // true
// console.log(myNAme=="abdul jabbar")    //false

2 // Numeric
// let num1=10
// console.log(num1==10) //true
// console.log(num1!==10) //false 

3// greater than and less than

// let num1=10
// let num2=5
// console.log(num1>9) //true
// console.log(num2<5)  //false
// console.log(num1<=10)   // true
// console.log(num2>=10)   // false

5// and && === or

// let num1 =10
// let num2 =5
// console.log(num1 >9 &&num2< 5) //false =(both conditions should be true)
// console.log(num1 >9||num2< 5) //true =(anyone condition should be true)

5// Array
let myArray =[2,3,"jabbar"]
let myString ="Ali"
console.log(Array.isArray(myArray))  //true
// console.log(Array.isArray(myString)) // false