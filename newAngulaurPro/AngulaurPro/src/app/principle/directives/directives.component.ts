import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {

  showAddr: boolean = false;
  city: boolean = false;
  rating: any = 40;
  cars = ['Swift', 'jaguar', 'MiniCuper', 'Audi'];
  students = [
    {name:'tushar',age:20,city:'pune'},
    {name:'Pooja',age:23,city:'pune'},
    {name:"om",age:22,city:'pune'}
  ];
  tableheding = ['Name','age','City'];
  emp = [
    {
      name:
        { firstName: 'vaisali', lastName: 'mahadik' }
    },
    {
    name:
        { firstName: 'ravi', lastName: 'mahadik' }
    },
    {
      name:
          { firstName: 'seema', lastName: 'mahadik' }
      }
  ]
   amount:any = 50000; // boolean true -true; data-true,null/undefinde >>fales
    age = 18 ;
    showTable = true;
    inputValue: any;
     data: any[] = [];
     color = "green";

  toshowAddress() {
    // this.showAddr = true;
    this.showAddr = !this.showAddr;// if--> t, !t-->f
  }
  toShowCity() {
    this.city = !this.city;
  }
  toShowCars() {

  }
  inputBoxVal() {
    console.log(this.inputValue);
    this.data.push(this.inputValue)
  }
  getCss(){
    return 'yellow'
  }
}
