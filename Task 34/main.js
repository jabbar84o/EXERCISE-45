Pizzas: 
// Think of at least three kinds of your favorite pizza. Store these pizza names in an array, and 
// then use a for loop to print the name of each pizza. 
// • Modify your loop to print a sentence using the name of the pizza instead of printing just the name of 
// the pizza. For each pizza you should have one line of output containing a simple statement like I like 
// pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The 
// output should consist of three or more lines about the kinds of pizza, you like and then an additional 
// sentence, such as I really love pizza! 
var favourite_pizza = ["pepperoni", "chicken", "veg"];
// for (let pizza of favourite_pizza){
//     console.log(pizza)
// }
// console.log("\n")
for (var _i = 0, favourite_pizza_1 = favourite_pizza; _i < favourite_pizza_1.length; _i++) {
    var pizza = favourite_pizza_1[_i];
    console.log("i realy like ".concat(pizza, " pizza!"));
}
console.log("i really like to eat pizza!");
