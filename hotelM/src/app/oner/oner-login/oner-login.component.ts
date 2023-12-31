import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/commnonScreen/commonServces/api-call.service';

@Component({
  selector: 'app-oner-login',
  templateUrl: './oner-login.component.html',
  styleUrls: ['./oner-login.component.scss']
})
export class OnerLoginComponent {
  loginForm!:FormGroup;
  showWorning=true; 
 showPass:boolean=false; 
 onerData:any;

 showpass = false;
 
 constructor(private fb:FormBuilder,private router:Router,private apiCallService: ApiCallService,
  ){} 

 ngOnInit(){ 
  this.formDetails(); 
  this.getOnerData();
 } 

 formDetails(){ 
 this.loginForm=this.fb.group({ 
  userName :["",[Validators.required]], 
  password:["",[Validators.required]] 
 }) 
 } 
  
 
 


  async getOnerData(){
   let endPoint ="oner";
  (await this.apiCallService.getApiCall(endPoint)).subscribe(res=>{
   this.onerData = res;
   console.log("onerdata",this.onerData);
   
  })

}

showPassword() {
  this.showpass = !this.showpass
}

login(){
  if(this.onerData){
   var matchedObj= this.onerData.find((item:any)=>{
   if(item.userName == this.loginForm.value.userName && item.password == this.loginForm.value.password){
      return item;
    }
    
    })
  }

  if(matchedObj){
    this.apiCallService.onerName = this.loginForm.value.userName;
    console.log("data",this.apiCallService.onerName);
    
    this.router.navigateByUrl('oner/onerSuccess');
  }
  else{
    this.router.navigateByUrl('oner');
  }
}
}
