import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/commnonScreen/commonServces/api-call.service';
import { SnackbarComponent } from 'src/app/snackbar/snackbar.component';


@Component({
  selector: 'app-hotel-registration',
  templateUrl: './hotel-registration.component.html',
  styleUrls: ['./hotel-registration.component.scss']
})
export class HotelRegistrationComponent {
  newHoteRegister!:FormGroup 
  id:any;
  recordById:any;
  durationInSeconds = 5;
  new:any;

  constructor(private fb:FormBuilder ,
    private apiCallService:ApiCallService,
    private router:Router,private matSnackBar: MatSnackBar){} 
    
ngOnInit(){ 
  this.id = this.apiCallService.id;
  this.recordById = this.apiCallService.recordById;
  this.new = this.apiCallService.new;
  console.log(this.id,this.recordById);

  this.formDetails() 
} 
 
formDetails(){ 
  this.newHoteRegister=this.fb.group({ 
    onerName:[ this.recordById?this.recordById.onerName:'',Validators.required], 
    
   // midName:['',Validators.required], 
    // lastName:['',Validators.required], 
    // email:['',[Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]], 
    // panNumber:['',], 
    mobileNumber: [ this.recordById ? this.recordById[0]?.mobileNumber :'', [Validators.required, Validators.pattern('[0-9+]*')]], 
    hotelName:[this.recordById ? this.recordById[0]?.hotelName :'',Validators.required], 
    hotelAdress:[this.recordById ? this.recordById[0]?.hotelAdress :'',Validators.required], 
    hotelNumber:[this.recordById ? this.recordById[0]?.hotelNumber:'',[Validators.required, Validators.pattern('[0-9+]*')]], 
    hotelMenu:[this.recordById ? this.recordById[0]?.hotelMenu :'',Validators.required], 
    rooms:[this.recordById ? this.recordById[0]?.rooms:'',Validators.required], 
    // gender:['',Validators.required], 
    // userName: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]], 
    pass: [ this.recordById ? this.recordById[0]?.pass :'', [Validators.required, Validators.minLength(8)]], 
    checkBox:[this.recordById ? this.recordById[0]?.checkBox :'',Validators.required] 
  }) 
} 
 
 
newHotelRegistration(){ 
  let endPoint = "hotelDetails";
  console.log(this.newHoteRegister.value); 
  this.apiCallService.postApiCall(endPoint,this.newHoteRegister.value).subscribe(res=>{ 
    console.log("responce::>>",res); 
   // if(res){ 
      // alert('Hotel registered Successfuly...!!'); 
      this.matSnackBar.openFromComponent(SnackbarComponent, {
        duration: this.durationInSeconds * 10000,
        verticalPosition: 'top',
        panelClass: ['positioned-snackbar']
      });
    
   // } 
  }) 
  this.router.navigateByUrl('oner/onerSuccess'); 
   // } 
}
 
  

update(){
 this.apiCallService.patchApiCall("hotelDetails",this.id,this.newHoteRegister.value).subscribe(res=>{

 })
 this.router.navigateByUrl("oner/onerSuccess")
}
ngOnDestroy(){
  console.log('destroy');
  this.apiCallService.new = false;
  this.apiCallService.recordById=[];
}
}