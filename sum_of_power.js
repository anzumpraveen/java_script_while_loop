
var readlineSync = require('readline-sync') 
var number= readlineSync.questionInt('enter the number=');
var power= readlineSync.questionInt('enter the number=');
var sol_power=number**power
var i=0
while(sol_power>0){
    var digit=sol_power%10
    console.log(digit)
    sol_power=parseInt(sol_power)/10
    i=i*10
    i=i+digit

}
console.log(i)






// console.log(typeof(sol_power))









// user=num**pow
// x=str(user)
// x.split()
// i=0
// sum=0
// while i<len(x):
//     sum+=int(x[i])
//     i+=1
// print(sum)