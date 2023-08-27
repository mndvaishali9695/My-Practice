// diff between let,var,const

//scopedifference:
//var: function level scope and let const :block scop
 function learningLeVarConstDifference(){
// code block
    var a =10;
   let b = 40;

   if(a>2){
    let c = 50; // can not access a variablenwith let keyword outside block
               // let,const keyword has block level scope
               //var keywordhas funtion levelscope
    var d = 90;
    const e = 80 ;
    // let  res = a + 20;
    // console.log(res);
    // console.log(b);
     console.log(c); // 50
    console.log(d);// 90
    console.log(e);// 80

   }
//    console.log(d);
//    console.log(e);//Uncaught ReferenceError:
//    console.log(c); // Uncaught ReferenceError:
   
}

// learningLeVarConstDifference();




// hosting: difine value to the variable first and then declare it
function test(){
    // let name = 'vais'; declr+ diff
    let name; // declaration
    name ='vaish'; // defination

    surname = 'mahadik'; //def
    // let surname; // declr  with  let keyword hosthing not possible
    // console.log(name,surname);

    city = 'mumbai';
    var city;
    console.log(city); // hosting possible with var keyword

    city2  =' pune'
   // const city2 =// with  const keyword  hosting  is not possible
 }



test()

