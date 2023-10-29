import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'app-principal-sign-up',
  templateUrl: './principal-sign-up.component.html',
  styleUrls: ['./principal-sign-up.component.scss']
})
export class PrincipalSignUpComponent {

  principalSignUpForm! :FormGroup;
  age =61;
  todayDate = new Date();
  userAge: any;
  datePattern = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
  isGenderSelected: boolean =false;
  showPass= false;
  constructor(public formBuilder:FormBuilder,private router:Router){
    
  }
  
  ngOnInit(){
    
    this. FormDetails();
    console.log(this.todayDate,);
    let fYear =this.todayDate .getFullYear()
    console.log(fYear);
    
    
  }

  FormDetails(){
    console.log('form details fun..');
    
    this.principalSignUpForm  = this. formBuilder.group({
      userName : ['vaishali',[Validators.maxLength(10),Validators.minLength(5),Validators.pattern('[a-zA-Z ]+')]],
      emailId:[,[Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      // dob :[[Validators.pattern(/^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/)]],
      mobNo:[,[Validators.pattern('[0-9]+')]],
      dob:['',[Validators.pattern(this.datePattern)]],
      TC: [false,[Validators.requiredTrue]],
      gender:['',],
      cars:[],
      customVal:['',this.removeWhiteSpace],
      oldField:['',this.oldWordRestriction]

    })
   }
   removeWhiteSpace(customValFieldValue : any){
    let isInValid = customValFieldValue.value ? customValFieldValue.value?.trim().length == 0 : null
    return isInValid ? {'whiteSpace':true}  : null;
  }
  oldWordRestriction(inputValue: any) {
    //Old,OLD,oLd,OLd,olD....
    let inputValue1 = inputValue.value?.toLowerCase().split(' ');
    let isIncludeOld = inputValue1.includes('old');
    return isIncludeOld ? { 'oldWord': true } : null;
  }
   
   
  
   submit(){
     let gender =this.principalSignUpForm.value.gender
     if(gender){
      console.log('f data',this.principalSignUpForm.value);
     }
     else{
       this.isGenderSelected=true;
      return
     }
    
    
   }
   calYear(){
    let dobFieldValue = this.principalSignUpForm.value.dob;
    let todayFullYear = this.todayDate.getFullYear();
    let splitedDate = dobFieldValue?.split('/');
    let usersFullYear = splitedDate[2];
    this.userAge = todayFullYear - usersFullYear;

   }
   gender(){
    this.isGenderSelected = false;
   }
   showPassword(){
    console.log('..,.m,m');
    this.showPass = !this.showPass;
  
    
   }
}
