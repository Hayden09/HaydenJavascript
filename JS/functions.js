//const pressGrindBeans = () => {
 //   console.log("Grinding for 20 seconds");
//}
//pressGrindBeans();

console.log("-------------------------")

//let coffeeIsGrinding = false;

//const pressGrindBeans = () => {
//    if (coffeeIsGrinding) {
//        console.log("stop the grind");
//        coffeeIsGrinding = false
//    } else {
//        console.log("grinding is about to begin");
//        coffeeIsGrinding = true;
//    }
//}
//pressGringBeans();

console.log("-------------------------")

//const cashWithdrawal = (amount,accnum) => {
//    console.log(`withdrawing ${amount} from ${accnum}`);
//}
//cashWithdrawal(300, 50449921);
//cashWithdrawal(30, 50449921);
//cashWithdrawal(200, 50447921);

console.log("-------------------------")
console.log("Activity - 1")
console.log("-------------------------")

//const takeOrder = (size,drinkType) => {
//    console.log (`Order received: dispensing a ${size} ${drinkType}`);
//}
//takeOrder ("tall","latte");

console.log("-------------------------")
console.log("Return Functions:")

const addUp = (num1, num2) => {
    return num1 + num2;
}
addUp(7,3);
console.log(addUp(2,5));
   
console.log("-------------------------")

const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
};
const getFahrenheit = (celsius) => {
return multiplyByNineFifths(celsius) + 32;
};
console.log("The temperature is " + getFahrenheit(15) + "°F");

console.log("-------------------------")
console.log("Declaration Functions:")

function square(number) {
return number * number;
};
square(5);

//The output should be 25. to make this work is to type "function", followed by "Name" & "(Parameter)", (in this case "square(number)")
//
console.log("-------------------------")
function factorial (n) {
if ((n === 0) || (n === 1)) {
return 1;
} else {
return (n * factorial(n-1));
}
}
console.log(factorial(33));

//
console.log("-------------------------")
console.log("activity - 1. Pizza Order:")

let orderCount = 0;
const takeOrder = (topping,sideOrder) => {
console.log(`Pizza with ${topping} & a side of ${sideOrder}.`);
orderCount++;
}
takeOrder("pineapple","Sweet potato fries");

console.log("-------------------------")
console.log("activity - 2. Cash Machine:")

let pin = 7689;
let amount = 10;
const cashWithdrawal = (amount, pin) => {
console.log(`Withdrawing ${amount} from account ${pin}`);
}
if (pin == 7689 && amount >= 0) {
console.log ("dispensing cash");
}
else if (pin = 7689 && amount <= 0) {
    console.log ("insufficient funds in account, would you like to overdraw?");
}
else {
    console.log ("error, unable to complete request");
}
//For this challenge the account pin must match, and the amount of money to withdraw must be above zero
//In the instance that the amount is depleted, but the number matches the user is informed of insfficient funds
//if the account pin is incorrect the customer is otherwise met with an error.