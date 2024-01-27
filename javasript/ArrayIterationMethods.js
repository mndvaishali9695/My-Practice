

let cars =['120','110','audi','jaguar']
let newcars = [];
for (let i = 0;i < cars.length ;i++) {
   newcars.push(cars[i])
}
console.log('newcars',newcars);
 // forEach()
let newcars1 =[]
cars.forEach(ele => {
   newcars1.push(ele)   
})
console.log('newcars1',newcars1);

//    spread oprator()
let cars2 =[...cars];
console.log(cars2);

function test(){

   let employee= [
{nane:'pooja',age:30 ,NO:73573985},
{nane:'peya',age:30,NO:73573985},
{nane:'jay',age:30,NO:73573985},
   ]
   let employeeNO=employee.map(employeeData=>{
      return employeeData.NO;
   })
   console.log('employeeNO',employeeNO);
}
function casceding(){
test()
console.log('casceding');
}
