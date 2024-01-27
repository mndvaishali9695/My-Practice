
let no =[10,20,30,40,50]
console.log(no.length );   



//tostring
let stringesNo = no.toString()
console.log(stringesNo);

//pop()
let  fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruits2 = fruits.pop()
console.log(fruits);
console.log(fruits2);

// push()

let  fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.push('kivi')
   console.log (fruits1);


   //shift()
   let  fruits3 = ["Banana", "Orange", "Apple", "Mango"];
   let fruits4 =  fruits3.shift()
   console.log( fruits4);
   console.log(fruits3);

   //unshift()
   let  fruits5 = ["Banana", "Orange", "Apple", "Mango"];
 fruits5.unshift('lemon','335')
 console.log( fruits5);

let  fruits7 = ["Banana", "Orange", "Apple", "Mango"];
delete(fruits7[0])
  console.log(fruits7);
// concat()
  let  fruits8 = ["Banana", "Orange", "Apple", "Mango"];
  let fruits9 = fruits8.concat('Banana",.. "Orange...')
  console.log( fruits9 );
// join()
  let  fruits10 = [19,9,1996,];
  console.log( fruits10.join('-'));

//slice
  let  n = [10,20,30,40,50,60,9];

  console.log(n.slice(4,));
  // splice()
  let  fruits11 = ["Banana", "Orange", "Apple", "Mango"];
  fruits11.splice(0,2,'kivi');