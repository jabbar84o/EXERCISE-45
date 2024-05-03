var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Think of at least five places in the world you’d like to visit. 
// • Store the locations in an array. Make sure the array is not in alphabetical order. 
var placesToVisit = ["Tokyo", "Pakistan", "America", "China", "Japan"];
// • Print your /array in its original order. 
console.log("original order:", placesToVisit);
// • Print your array in alphabetical order without modifying the actual list. 
console.log("Alphabetical order:", __spreadArray([], placesToVisit, true).sort());
// • Show that your array is still in its original order by printing it. 
console.log("original order after sorting:", placesToVisit);
// • Print your array in reverse alphabetical order without changing the order of the original list. 
console.log("Reverse alphabetical order:", __spreadArray([], placesToVisit, true).sort().reverse());
//  • Show that your array is still in its original order by printing it again. 
console.log("original order after reverse sorting:", placesToVisit);
// • Reverse the order of your list. Print the array to show that its order has changed.
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
placesToVisit.sort();
console.log("sorted in alphabetical order:", placesToVisit);
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("sorted in reverse alphabetical order:", placesToVisit);
