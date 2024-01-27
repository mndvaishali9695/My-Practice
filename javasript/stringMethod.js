//conditions
let a =50;
let b = 60;
if (a < b) {
   console.log('a is small');
}

if (a ==b) {
   console.log('a is small');
}
else{
   console.log('a is big');
}
if( a == b){
   console.log('a and b are equal');
}
else if(a < b){
   console.log('a is smaller that b ');
   
}
else if(a < b){
   console.log('b is grater that a ');
   
}
else{
   console.log('else block');
}






let r= 'method replaces  Pune a specified value with another pune value in a string:'
let q = r.replace(/pune/gi,'mumbai')
console.log(q);

let p =r.replaceAll(/pune/gi,'mumbai')
console.log(p);

//concat()
let FN = "Sathe";
let LN = "mahadik";
let f_name =FN+ " "+LN;
console.log(f_name);

let s_name =FN.concat(' ',LN ,' ','vaishali');
console.log(s_name);

// for loop
 let cars =['120','110','audi','jaguar']
  console.log(cars[0]);

  for(let i = 0 ; i < cars.length; i++ ){
   console.log(cars[i]);
  }

  // TolowerCase()
   let city = 'MumbaiKKKKK'
   let city1 = city.toLocaleLowerCase();
   console.log( 'city>>',city1);

   //uppercase()
   let city2 = city.toUpperCase();
   console.log( 'city>>',city2);

   let name3 = '   pune   ';
   let name4=name3.trim();
   console.log(name4);

   let text5 = 'vaishali mahadik'
   console.log( text5.charAt(3));

//JavaScript String split()
//A string can be converted to an array with the split() method:
let dob = '19/09/1996';
let newDob =dob. split('/')
   console.log(newDob);
   console.log(newDob[2]);

   let u = 'vaishali e mahadik'
   let u2 =u.split(' ');
   console.log(u2);
   console.log(u2[2]);
   console.log(u2[0]);
//    //String Search Methods
// String indexOf()
// String lastIndexOf()
// String search()//

let d = 'dog dsrfrghg'
console.log(d.indexOf('g'));
console.log(d.lastIndexOf('g'));

let text2 = "Please locate where ' dum locate'dum occurs!";
console.log(text2.search("dum"));

let text4 = "Hello world, welcome to the universe.";
console.log(text4.includes("World"));



let text3 = "Please locate where ' dumase locatase'dum occurs!";
console.log( text3.match('ase'));
console.log( text3.match(/ase/));
console.log( text3.match(/ase/g));



   let a1= {
      "employees":[
        {"firstName":"John", "lastName":"Doe"},
        {"firstName":"Anna", "lastName":"Smith"},
        {"firstName":"Peter", "lastName":"Jones"}
      ]
}

let text6 = "I love cats. Cats are very easy to love. Cats are very";
console.log( Array.from(text6.matchAll(' Cats')));