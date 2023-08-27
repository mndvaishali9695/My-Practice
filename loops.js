// for loops
// array

//let cars = ['i20','i10','swift','jaguar','Audi',200,true,test()]; Hetrogenous array >>>valid array


// function test(){
//     return 20;
// }
// console.log(cars);

//homogenous array
let cars = ['i20', 'i10', 'swift', 'jaguar', 'Audi'];

//length operator: string and array -->> will give length of aaray

console.log( cars.length);
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);
console.log(cars[4]);
console.log(cars[6]); // undefinde

// for loop
// for(statment; condition;++/--)
// i ++ = > i = i + 1 

for(let i = 0; i < cars. length; i++){
    console.log(cars[i]);
}

// for(;i < cars.length ; i++){  //error i is undefined

// }
//for(; ; i++){  //error i is undefined

// }
// for(;; ){  //infinite loop

// }
// for(let i = 0 ; i < cars.length ; ) { //infinite loop

// }
 for ( let index = 0; index < cars. length;index++){
    console.log(cars[index]);
 }
 //for in : do not use for array
for (let i in cars) {
    console.log(cars[i]);
}
//note: Do not use for in over an Array if the index order is important.
//The index order is implementation-dependent, and array values may not be accessed in the order you expect.
//It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.

 // for  in loop on objects 


  let student = {
    name : 'nitin ',
    age: 20,
    mob : 6478329090
  }
  //obj : for in 
  for (let x in student) {
      console.log(student[x]); //[]>>property access
  }
 //array : for,for of , forEach(array ittration method)
  let noumbrs = [ 10,20, 66,55,88,889,];
  for( let num of noumbrs){
   console.log(num);
  }

  let h = 10
  do{
      h++;
      console.log(h);
  } while ( h < 15 ) 
  

  let innerHTM = Date('23_8-23')
  console.log(innerHTM);
