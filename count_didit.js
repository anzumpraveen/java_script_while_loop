var readlineSync = require('readline-sync') 
var number= readlineSync.questionInt('enter the number=');
var count=0
while(number>0){
    count+=1
    number=parseInt(number/10)
}
console.log("digit"+"="+count)









