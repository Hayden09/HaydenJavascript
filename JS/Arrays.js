let bestMusic = [
    "Porcupine Tree - Trains",
    "Esperanza Spalding - Black Gold",
    "Nevermore - Obsidian Conspiracy"
];
console.log(bestMusic);
// Note: this is the syntax we use to pull the entire list, also called an "Array".

console.log (bestMusic[2]);
// Note: this is how we pull a specific items from the array, using the index tradition. REMEMBER: in Java script we count from zero, so 0 = 1, 1 = 2, 2 = 3 etc.

bestMusic[1] = "Pinkguy - stfu";
console.log(bestMusic);
// Note: this allows us to change items in our array. This chznge is permanent unless this code is removed.

console.log(bestMusic.length);
// Note: When using ".length" against an array, it will count the number of items in the array. It DOES NOT count the number of characters.

bestMusic.push("Falk - Esspresso with Bayo");
console.log(bestMusic);
// Note: Push allows us to add items to an array

bestMusic.pop();
console.log(bestMusic);
// Note: Pop is used to remove items from an array, if there is no specification, the last item on the Array will be removed

console.log("----------------");
console.log("challenge 1");
console.log("----------------");

let faveWebsites = [
    "Instagram",
    "Facebook",
    "Uncyclopedia"
];
console.log(faveWebsites);

console.log("----------------");

faveWebsites.push("AGB");
faveWebsites.push("Artstation");
console.log(faveWebsites);

console.log("----------------");

faveWebsites.pop();
console.log(faveWebsites);
//Note: This was done using the methods applied in the opening session

console.log("----------------");
console.log("challenge - 2");
console.log("----------------");

let dankMemes = ["Angry Boomer", "Crying Neighbour", "jokers boner"];
//let firstElement = dankMemes.shift();
console.log(dankMemes);
//console.log(firstElement);

// Note: This is the .Shift Method, it allows us to remove the first element of an Array, in this case "Angry Boomer", and shows us the removed element.
// This also changes the length of the Array

console.log("----------------");

console.log(dankMemes.unshift("Doom toots", "Dummy Thicc"));
console.log(dankMemes);

// Note: This is the Unshift method, and it allows us to add new elements to the beginning of an Array, as well as telling us the new length of the Array

console.log("----------------");

let amphibians = ["Toad","Frog","Newt","Salamander","Caecilian"];
console.log(amphibians);

console.log (amphibians.slice(2));

//console.log (amphibians.slice(2,4));

//console.log (amphibians.slice(1,4));

//Note: The Slice method allows us to temporarily affect the array by extracting items.

console.log("----------------");

//amphibilans.splice(1);
//console.log (amphibians);

//Note: Splice changes the contents of an array by 
// removing or replacing existing elements and/or adding new elements