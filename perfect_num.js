var readlineSync = require('readline-sync') 
var user= readlineSync.questionInt('enter the number=');
var i=1
var sum=0
while(i<user){
    if (user%i==0){
        sum+=i
    }
    i++
}
if(user==sum){
    console.log(user,"perfect")
}
else{
    console.log(user,"not perfect")
}

