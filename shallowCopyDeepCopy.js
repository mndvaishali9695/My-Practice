

var color = ['red','blue','orange','white', 'black',]
var  color2 = color;// color and color2 array is pointing to the same memory location
console.log('color',color)
console.log('color2',color2);

// let num = [ 100,200.500,250,]
// let num1 = num;
// console.log('num',num);
// console.log('num1',num1);

// shallow copy : if we changing items copied array the changes will reflect to the original array as well
let a = [ 10,20,30];
a[1] = 60;
console.log(a);

color2[2]= 'pink';// intr(?)
console.log('color2',color2);
console.log('color',color)

// deep copy : original array/object item will not get affected if change item of  copied array / object
 let car1 = [ 'swift','mini','audi', 'cup','jaguar',]; // memory location of car1 and car2 is different in deep copy
 let car2 = [...car1];
 console.log('car1',car1);
 console.log('car2',car2);
 car2[0]='vaishali';
 console.log('car2',car2 );


 // shallow copy of object
 let carDetails1 = {
      carName: "swift",
      color: "white",
      price:800000,
      tpermite: true
 }
let carDetails2 = carDetails1;
console.log('carDetails1',carDetails1); 
console.log('carDetails2',carDetails2); 

carDetails2.price = 900000;

console.log('carDetails1',carDetails1); 
console.log('carDetails2',carDetails2);

let carDetails3 = {
      carName: "swift",
      color: "white",
      price:800000,
      tpermite: true
 }
 // deep copy of object : spread /json
  
 let carDetails4 = {...carDetails3}
 console.log('carDetails3',carDetails3); 
console.log('carDetails4',carDetails4);

carDetails4.color ='balck'
console.log('carDetails3',carDetails3); 
console.log('carDetails4',carDetails4);

//using jsonparse and stringfy

//json stringfy : 
let student = '{"stdName":"pooja","age":20}'; //strinfYED JESON FORMAT
let student2 = {name: 'pooaj',age:20} // json parsed formate
// jeson : javascript data interchange formate
// when we transfring data from front end to backed or
// getting data from backend to frontend it should be in jsin format
// JSON:

let epmy = {
    empName:'sourabh',
    empFriends:[ 'sanchit','jay','ram','radha'],
    empyCar :[
        {carName:'audi',color:'black'},
        {carName:'audi',color:'pinkk'},
        {carName:'audi',color:'pinkk'}
    ],
    empAddress : {city: 'mumbai',pincode: 41020}
}
let carDetails7 = { 
    carName : "Swift",
    color: "white",
    price: 800000,
    tpermite: true
} 
 let stringFyed_obj = JSON.stringify(carDetails7); //soket API data should go and come instringify formate
 console.log('stringFyed_obj',stringFyed_obj);
 console.log(stringFyed_obj.carName);

 let paraseData = JSON.parse(stringFyed_obj)
 console.log( paraseData);
 console.log(paraseData.carName);

 