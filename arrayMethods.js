// length poperty
 let no = [10,20,90,66,336]
 console.log(no.length);

// toString();
 let stringesNo = no.toString();
 console.log(stringesNo);

// pop()
 const fruits = ["Banana", "Orange", "Apple", "Mango"];
 let fruit2 = fruits.pop();//mango returnes removed item
 console.log(fruits);
 console.log(fruit2);

 // push()

 const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
 let d = ['a','v','g']
  console.log(fruits1.push('kivi','pinaple',d)); // 5 new lenght
console.log(fruits1); //
 
//Array shift()
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
// let b = prompt()
// console.log(b);
let shiftedIteam =fruits2. shift()//mango returnes removed item
console.log( shiftedIteam);
console.log(fruits2);

//unshift()
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
 console.log(fruits3.unshift('stt','jungkook'))
console.log(fruits3);

// to delete item =>pop, shift,delete - oprator:dleted item  creates undefind whole  in originle array
// so lenght will remains same with delete oprator

const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
let indexOfApple = fruits4.indexOf('Apple')
console.log(indexOfApple);
delete fruits4[indexOfApple];
console.log(fruits4);

// concat
const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
fruits6 = [ "...Apple", "...Mango"];
let fruits7 =fruits5.concat(fruits6)
console.log(fruits7);

const fruits8 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits8.join('$'));

// join
const birthd = [4,4,1992];
 let date = birthd.join('-').toString()// '4-4-1992'
 console.log(date);

 // slice
 let n = [10,20,8,35,6,6,56,]
  console.log(n.slice(3,));
 

  //splice
   
    //fruits0.splice()// first para >> how many element to add.secend para >> how many element
    // u want to remove,3rd >> iteams to be added
    
    let fruit0=  ["Banana", "Orange", "Apple", "Mango"];
//fruit0.splice(1,0,'poo','pp') //add
//fruit0.splice(2,1)//remove
fruit0.splice(1,2,'ll','ll');
//fruit0.splice(1,2) 
//fruit0.splice(1,2,'vaishali) 
//first para >> how many ele wants to add , sec para >> 
//how many ele u want to remove, 3rd >>items to be added
console.log(fruit0);

//without using sort or reverse method convert array into decending order 

let test = ["Banana", "Orange", "Apple", "Mango"];
let revArray = test.sort().reverse();
console.log(revArray);
