console.log ("Loop basics:")
for( i = 0 ; i < 10 ; i++ ){
    console.log(i);
   } 
console.log ("----------------------------")
//for( i = 9 ; i > -1 ; i-- ){
//    console.log(i);
//}
//The for loop for the second entry has been changed to count from 9 to 0.
//We write loops in order to prevent us from having to write stuff over and over again.
console.log ("----------------------------")
console.log ("Using forloops to extract from Arrays:")
let favouriteChoco = [
    "Mars",
    "Snickers",
    "Dairy Milk",
    "Picnic"
];
   for (chocoIndex = 0; chocoIndex < favouriteChoco.length;
   chocoIndex++) {
    console.log(favouriteChoco[chocoIndex]);
   }
console.log ("----------------------------")
//let favouriteFilms = [
//    "Her",
//   "Play misery for me",
//    "Ghost in the Shell",
//    "Blade Runner",
//    "Hellraiser"
//];
//favouriteFilms.push ("Porco Rosso");
//favouriteFilms.push ("Misery");

//   for (filmsIndex = 0; filmsIndex < favouriteFilms.length;
//    filmsIndex++) {
//        console.log(favouriteFilms[filmsIndex]);
//    }
console.log ("------------------------------")


console.log ("------------------------------")
console.log ("While loops:")
// example while (condition){
//         do something
//}

//Wild loops run ad infinitum

//let cards = ["Diamond", "Spade", "Heart", "Club"];
//let currentCard = "Spade";
//while(currentCard != "Spade"){
// console.log(currentCard);
// currentCard = cards[Math.floor(Math.random()*4)];
//}
//console.log(currentCard);

//The math.random and math.floor functions were covered in dotnotation
// whilst the syntax is set up like this the loop will only return spade, so we change an element.
//So we change the "let currentcard" from spade to blank, or any other card we choose.
//

console.log ("------------------------------")
console.log ("challenge 2 - function addition:")
let favouriteFilms = [
    "Her",
    "Play misery for me",
    "Ghost in the Shell",
    "Blade Runner",
    "Hellraiser"
];
//favouriteFilms.push ("PorcoRosso");
//favouriteFilms.push ("Misery");

   for (filmsIndex = 0; filmsIndex < favouriteFilms.length;
    filmsIndex++) {
        console.log(favouriteFilms[filmsIndex]);
    }
const filmCheck = () => {
if (favouriteFilms[2] == "Ghost in the shell") {
    console.log("yeah Ghost in the shell is there");
}
else {
    console.log ("what, don't you like that GiTS anymore?");
}} 

// Unspecified error causes this current version to not display the outcome of the film check constant

console.log ("------------------------------")
console.log ("challenge 3 - wild loop:")

let currentNo = 40;
while(currentNo != 50){
 console.log(currentNo);
 currentNo = (Math.floor (Math.random () *51));
}
console.log(currentNo);

//copied from liams example - I need to revise this badly