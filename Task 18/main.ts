// Think of at least five places in the world you’d like to visit. 
// • Store the locations in an array. Make sure the array is not in alphabetical order. 
let placesToVisit :string[] =["Tokyo","Pakistan","America", "China","Japan"];
// • Print your /array in its original order. 
console.log("original order:",placesToVisit);
// • Print your array in alphabetical order without modifying the actual list. 
console.log("Alphabetical order:",[...placesToVisit].sort());
// • Show that your array is still in its original order by printing it. 
console.log("original order after sorting:",placesToVisit);
// • Print your array in reverse alphabetical order without changing the order of the original list. 
console.log("Reverse alphabetical order:",[...placesToVisit].sort().reverse());
//  • Show that your array is still in its original order by printing it again. 
console.log("original order after reverse sorting:",placesToVisit);
// • Reverse the order of your list. Print the array to show that its order has changed.
placesToVisit.reverse();
console.log("Reversed order:",placesToVisit); 
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
placesToVisit.sort();
console.log("sorted in alphabetical order:",placesToVisit )
placesToVisit.sort((a,b) =>b.localeCompare(a));
console.log("sorted in reverse alphabetical order:",placesToVisit);