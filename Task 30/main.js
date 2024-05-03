// Hello Admin# Make an array of five or more usernames, including the name 'admin'. Imagine you are writing 
// code that will print a greeting to each user after they log in to a website. Loop through the array, and 
// print a greeting to each user: 
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a 
// status report? 
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
// let userNames:string[] = ["Ali","Jabbar","Riaz","Waseem","Sattar","Admin"];
// for(let i = 0; i < userName.length; i++) {
//     if(userNames[i] == "Admin"){
//         console.log(`\n Hello ${userNames[i]} would you like to see a status report?\n`);
//     }else{
//         console.log(`Hello ${userName.length[i]} thank you for logging in again!`)
//     }
//     }
var users = ["Ali", "Jabbar", "Riaz", "Waseem", "Sattar", "Admin"];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === "Admin") {
        console.log(" Hello admin, would you like to see a status report? ");
    }
    else {
        console.log("Hello ".concat(user, ",thank you for logging in again"));
    }
}
