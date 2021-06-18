var readlineSync = require('readline-sync') 
var number= readlineSync.questionInt('enter the number=');
let i=1
while(i<=10){
    table=i*number
    console.log(table)
    i++
}