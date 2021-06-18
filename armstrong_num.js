let sum = 0;
var readlineSync = require('readline-sync') 
var number= readlineSync.questionInt('enter the number=');
let temp = number;
while (temp > 0) {
    let remainder = temp % 10;

    sum += remainder **3
    temp = parseInt(temp / 10);
}
if (sum == number) {
    console.log(number,"is an Armstrong number");
}
else {
    console.log(number ,"is not an Armstrong number.");
}
