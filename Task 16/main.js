// You just found a bigger dinner table, so now more space is available. Think of three more guests 
// to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing 
// people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list
var guestArray = ["Akash", "Ali", "Qadeer", "Riaz"];
// let canNotAttend :string = "Rohit"
// let newGuest : string = "Shafqat"
// guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
// console.log(guestArray)
// guestArray.map((items) =>
// console.log(`Dear ${items}, i found a bigger dinner table so i am invited more people.`)
// part 2 beginig
var guestbeg = "usman";
guestArray.unshift(guestbeg);
console.log(guestArray);
// part 3 middle
var middleguest = "rehan";
var middleindex = guestArray.length / 3;
guestArray.splice(middleindex, 0, middleguest);
console.log(guestArray);
// part 4 use append
guestArray.push("zeeshan");
console.log(guestArray);
guestArray.map(function (items) {
    return console.log("dear ".concat(items, ",you are invited in the more people list on dinner"));
});
