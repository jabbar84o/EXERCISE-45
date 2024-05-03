// Magicians:  
// Make an array of magician’s names. Pass the array to a function called show_magicians(), which 
// prints the name of each magician in the array.

function show_magicians(Magicians:string[]): void {
for(const magician of Magicians) { 
    console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
}
}

const magician:string[]=["David Coppererifield","Harry Houdini","David Blaine"]
show_magicians(magician)