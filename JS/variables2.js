if (1 === "1") {
    console.log(true);
}
else {
    console.log(false);
}
//False is logged, this is because there is variable assigned the value of 1 for the syntax to use.


let age = 18;
if (age > 17) {
    console.log ("yes I can serve you");
}
else {
    console.log ("sorry you are not old enough to serve");
}
//ages greater than 17 can be served

let country = "UK";
if (age > 17 && country == "UK") {
    console.log ("you are old enough to enter the right country");
}
else {
    console.log ("you are not old enough or are in the wrong country");
}
//only persons within the UK who are over the age of 17 can use the service

let day = "saturday";
if (day == "saturday"|| day == "sunday"){
    console.log ("It's currently the weekend");
}
else {
    console.log ("It is not currently the weekend");
}
//Saturday and Sunday are registered as days of the weekend

console.log ("challenges 1 - 3");
console.log ("challenge 1 - password:");
let password = "password";
if (password.length >= 8 ){
    console.log (password = "welcome");
}
else if (password.length <= 8 ){
    console.log ("password must contain at least 8 characters");
}
else {
    console.log ("the password you have entered is incorrect");
}
//To determine the length of our variable, we put ".length" after it, and ">= *insert number* ".
//To let someone know they haven't entered the correct amount of numbers we'll put ".length" and then "<= *insert number* ".
//If someone has put the designated number amount, but the password is wrong, we...

console.log ("challenge 2 - division variable:");

let num = 15
if (num%3 < 1 || num%5 < 1){
    console.log ("this number is divisable by 3 or 5");
}
else {
    console.log ("this number is not divisable by 3 & 5");
}
//For us to determine if the variable is divisable by 3 or 5, we enter "num%" followed by the desired number. 
//In the instance of having 2 numbers to check against (3 & 5), we type "num%desirednumber < 1 || num%desirednumber < 1 "
//Anything that cannot be divided by the numbers we want to use can be placed in the "else" variable result.

console.log ("challenge 3 - fizz and buzz ");

let num = 15
if (num % 3 == 0 && num % 5 == 0){ console.log("FIZZ BUZZ");
}
else if (num % 5 == 0){console.log("BUZZ");
}
else if (num % 3 == 0 ){console.log("FIZZ");
}
else {console.log(num);
}
// copied from daniel ashfield's code as my own calculated percentages incorrectly.