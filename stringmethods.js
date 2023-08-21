
// string methods

let text = 'I live in Mumbai';
let  textLenght = text. length;
 console.log('textLenght',textLenght);


 //slice(start[inclusive], end[exclusive])

 let a = text.slice(3,7);
console.log('a>>>',a);

let  b = text.slice(-10,-5)  //slice(start[exclusive], end[inclusive])
console.log(b);

  console.log(text.substring(6,-9)) //i live -9=0 , so 6 will be end index(0,6)

  //substr(start index, length)

  console.log(text.substr(2,9));

  // replece

  let r = 'Pune method replaces  a specified pune value with another pune value in a stringmethod replaces a specified value with another value in a string';

  let q = r.replace(/pune/,'mumbai');
  console.log(q);

  let j = r.replace(/pune/g,'mumbai');
  console.log(j);

  let i = r.replace(/pune/i,'mumbai');
  console.log(i);

  let k = r.replace(/pune/gi,'mumbai');
  console.log(k);

  let p = r.replaceAll('pune','mumbai');
  console.log(p);

  //concat (or +)
  let FN = 'vaishali';
  let LN =  'MAHADIK';
  let f_name = FN +" " + LN;
  console.log(f_name);

 
  let F_name = FN.concat(' ', LN,' ', 'mahadik');
  console.log(F_name);

  //toLowerCase()
  let city = 'MumB KKKKKKai DFFFFF cvdfvfvfd  ';
  let city1 = city.toLocaleLowerCase();
  console.log('city1 >>>',city1);


  let city2 = city.toUpperCase  ();
  console.log('city2 >>>',city2);

  //trim()

  let  name3 = '  vaishali  '

  let name4 = name3.trim();
  console.log('name4>>',name4);

  //trimStart()
  let  name5 = name3.trimStart();
  console.log('name5', name5);

//trimEnd()
  let  name6 = name3.trimEnd();
  console.log('name6', name6);

  //charAt()
  let text5 = 'vaishali mahadik';
  console.log(text5.charAt(3));

  //split() always return array

  let dob = '04_04_1992';

  let newDob = dob.split('_')
  console.log(newDob);
  console.log(newDob[2]);

  let u = 'vaishali A mahadik';
  let u2 =u.split(' ');
  console.log(u2);
  console.log(u2[0]);
  console.log(u2[2]);

  // String Search Methods
// String indexOf()
 let d = 'dog vvvg gggg';
 console.log(d.indexOf('g')); // first match ind
 console.log( 'last ind',d.lastIndexOf('g')); // last match ind.

 let  text2 = "Please locatejkjk where 'locate' occurs!";
 console.log(text2.search("locate"));
  console.log(text2.search(/locate/));

  let text3 = "Please locatejkjksase whe resss 'locate' occurr";
  console.log( text3.match("ase"));
   console.log( text3.match(/ase/));
   console.log( text3.match(/ase/g));


   let text4 = "hello world, welcome to the universe.";
   console.log(text4.includes("hello")); // between same word 


  
   
// let a1 = {
//   "employees": [
//     { "firstName": "John", "lastName": "Doe" },
//     { "firstName": "Anna", "lastName": "Smith" },
//     { "firstName": "Peter", "lastName": "Jones" }
//   ],
//   status: 7001,
//   successMsg:'Data saved succussfully'
// }

// startswitch()
 let msg = " sss200 Success";
 console.log(msg.startsWith('20'));

 let text7 = "John Doe";
 console.log(text7.endsWith('Doe'));


 let text8 = "I love cats. Cats are very easy to love. Cats are very popular.";
 console.log( Array.from(text8.matchAll("Cats")));


 