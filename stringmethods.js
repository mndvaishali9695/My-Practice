
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

  let q = r.replace(/pune/gi,'mumbai');
  console.log(q);

  let p = r.replaceAll('pune','mumbai');
  console.log(p);

  //concat (or +)
  let FN = 'vaishali';
  let LN =  'MAHADIK';
  let f_name = FN +" " + LN;
  console.log(f_name);

 
  let F_name = FN.concat(' ', LN,' ', 'mahadik');
  console.log(F_name);
