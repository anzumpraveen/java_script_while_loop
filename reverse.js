var readlineSync = require('readline-sync') 
var user= readlineSync.questionInt('enter the number=');
var i=0
while(user>0){
    var digit=user%10
    user=parseInt(user/10)
    i=i*10
    i=i+digit
}
console.log(i) 




