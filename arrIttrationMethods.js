// foreach
  let  cars = ['i10','i20','swift','jaguar','audi'];
  let newCars = [];
  for(let i = 0 ;i < cars.length; i++){ // cars.length =>5
newCars.push(cars[i])
  }
  console.log('newCars',newCars);

  let newCars1 = []
cars.forEach(ele => {
    newCars1.push(ele)
})
console.log('newCars1',newCars1);

//spread operator (... )The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
let newCars2 = [...cars];

console.log('newCars2',newCars2);

// map 
let empoloyee = [
  { name: 'vaishali', age: 30 },
  { name: 'Pooja', age: 30 },
  { name: 'om', age: 30 },
  { name: 'jay', age: 30 }

]
//  let empoloyeeNames = empoloyee.map(empoloyeeData=>{
//  return empoloyeeData.name;
// })
let empoloyeeNames = [];
empoloyee.map(empoloyeeData=>{
  empoloyeeNames.push( empoloyeeData).name;
   })

console.log('empoloyeeNames',empoloyeeNames);

//function syntax:function funNme(){// code block}
function test(){
//code block
    //map
    let empoloyee = [
      { name: 'poonam', age: 30 },
      { name: 'pooja', age: 30 },
      { name: 'om', age: 30 },
      { name: 'jay', age: 30 }
  ]

  let empolyeeNames = empoloyee.map(employeeData => {
      return employeeData.name;
  })
  // let empolyeeNames =[];
  //  employee.map(employeeData=>{
  //     empolyeeNames.push(employeeData.name);
  //  })


  console.log('empolyeeNames', empolyeeNames);
}
















