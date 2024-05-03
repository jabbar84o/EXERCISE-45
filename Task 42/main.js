// Great Magicians:  
// Start with a copy of your program from Exercise 41. Write a function called make_great() that 
// modifies the array of magicians by adding the phrase the Great to each magician’s name. Call 
// show_magicians() to see that the list has actually been modified.
var magician = ["David Copperifield", "Harry Houdini", "David Blaine"];
function make_great(magicianArry) {
    for (var i = 0; i < magicianArry.length; i++) {
        magician[i] = " the great";
        +magicianArry[i];
    }
    function show_magicians(magicians) {
        magician.forEach(function (Element) {
            console.log(Element);
        });
    }
    make_great(magician);
    show_magicians(magician);
}
//     for (let i= 0; i <magicians.length; i++) {
//         magicians[i] = magicians[i] + " the great";
//     }
// }
// void:("show_magicians2"){
// }
// const magicians2:string[] = ["David Copperifield","Harry Houdini","David Blaine"];
// show
// // make_great(magicians;[] = ["David Copperifield","Harry Houdini","David Blaine"]);
