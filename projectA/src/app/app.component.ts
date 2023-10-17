import { Component } from '@angular/core'; //impot section
import { Router } from '@angular/router';

@Component({ //component directive/decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { //class to write code here
  title = 'My First Application';
  //let/var/const city = 'pune';
  //any Data type: city:any 
  //property
  city?: string;//declaration of property

  city2: string = 'pune';//declration + def of proprty
  city3 = 'mumbai....';
  name = 'vaishali';
  no1 = 10;
  no2 = 200;
  no3 = '88';
  data1 = 50;
  cars: string[] = ['swift,', 'jaguar', 'Audi'];
  car = this.cars[1];// jaguar
  student = { name: 'Om', age: 20 };

  genderM = 'male';
  genderF = 'Female';
  paintingHobby = "Painting";
  skechingHobby = "Skeching";
  readingHobby = "Reading";
  userHobbies: string[] = [];
  favCountry = "India";
  favFruit = "Apple";
  studentName: any = 'vaish';
  empName = '';
  num1 : any = 10;
  num2 : any= 20;
  result?:number;

  heading : string = 'my first Page..';
  myCityName? :string;
  addNumber1 :any;
  addNumber2 :any;
  addResult: any;
circles: { id: number, isSelected: boolean, backgroundColor: string }[] = [];
  nextCircleId = 1;
  selectedCircle?: { id: number, isSelected: boolean, backgroundColor: string } ;


  test = "Kolhapur";
  test1 = "nashik";

  constructor(private router:Router) { }    //to inject dependancies

  //life cycle hooks 

  //functions
  // Data binding : it is a techique to link Data between a componet and the DOM.
  // Data binding: 1 one way data binding 2.to way data binding
  // 1. one way data binding : string interpolation 2. property binding 3.event binding
  //string interpolation:It is a one way data binding technique: .ts/model to dom/html/template {{}}

  learningInterpolation() {  //Void: default type of function 
    //return 'patil';
    return this.city2;

  }


  gen(data?: any) {
    console.log('data', data?.target.value);
  }

  hobbies(event: any) {
    console.log(event.target.value);
    this.userHobbies.push(event.target.value);
    //this keyword use >> js : this key word is getting used inside object to point object's key
    //ts: this keyword is used to point global properties.
    //It is also used in functions to fetch value of global properties.
    console.log(this.userHobbies);
    console.log(this.favCountry);

    this.favCountry = 'Maletia';
    console.log(this.favCountry);
    this.gen();


  }
  fruit() {
    console.log(this.favFruit);
    this.learningInterpolation();

  }
  submit(event: any) {
    console.log(event);

  }
  Addition() {
    // let number1 = 20;
    // let number2 = 30;
    // var res = number1 + number2 //addition by variable
    // console.log('Addition result',res);
     this.result = parseInt(this.num1)+parseInt( this.num2)  // addition by propertis
     console.log('res-->',this.result);
     
  }
  addition1(event:any){
    this.num1 = parseInt(event.target.value) ;
   }

   addition2(event:any){
     this.num2 = parseInt(event.target.value) ;
   }


    heading1(){
      let pageHeading : string= 'my first Page';
    
   }

   additionOfNumbers(){
    this.addResult =  this.addNumber1 + this.addNumber2;
   }

   toggleSelectCircle(circle: { id: number, isSelected: boolean, backgroundColor: string }) {
    console.log(circle);
    console.log(this.selectedCircle);
    
     if (circle === this.selectedCircle) {
       circle.isSelected = !circle.isSelected;
       circle.backgroundColor == 'blue'? circle.backgroundColor ='grey' :circle.backgroundColor ='blue'
     } else {
       if(this.selectedCircle) {
         this.selectedCircle.isSelected = false;
         this.selectedCircle.backgroundColor = 'blue'
       }
       circle.isSelected = true;
       circle.backgroundColor = 'grey'
       this.selectedCircle = circle;
     }
   }
   addCircle() {
     const newCircle = {
       id: this.nextCircleId,
       isSelected: false,
       //backgroundColor: this.nextCircleId % 2 === 0 ? 'blue' : 'red'
       backgroundColor:'blue'
     };
     this.circles.push(newCircle);
     this.nextCircleId++;
   }

   landing(){
    this.router.navigateByUrl('landing.')
   }

}
