import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/commnonScreen/commonServces/api-call.service';

@Component({
  selector: 'app-oner-success',
  templateUrl: './oner-success.component.html',
  styleUrls: ['./oner-success.component.scss']
})
export class OnerSuccessComponent {
  hotelDetails: any;
  onerName: any;
  hotelDetailsByOner!: any[];
  headings = ["Hotel Name","Hotel Address","Hotel Number","Hotel Menu","Room","Edit","Delete"];

  searchText:any;
 
  shwoRecord: boolean = false;



  constructor(private router:Router,private apiCallService: ApiCallService,
    ){} 

    ngOnInit(){
      this.onerName =  this.apiCallService.onerName;
      
      }
       async showHotelDetails(){
        this.hotelDetailsByOner =[];
       this.hotelDetails = await this.apiCallService.getApiCall("hotelDetails").toPromise()
       console.log("hotelDetails",this.hotelDetails );
       this.getHotelByOner()
       
      } 
  getHotelByOner(){
    this.hotelDetails.forEach((element:any) => {
      if(element.onerName == this.onerName ){
        this.hotelDetailsByOner.push(element)
      }
    });
    if(this.hotelDetailsByOner.length > 0){
      this.shwoRecord = true;
     }
    console.log("hote list by oner",this.hotelDetailsByOner);
}
edit(id: any) {
  let recordById:any = [];
  console.log("id", id);
  this.hotelDetails.forEach((ele:any)=>{
     if(ele.id == id) {
      recordById.push(ele)
     }
  })
  console.log("record ",recordById);
  this.apiCallService.recordById = recordById;
  this.apiCallService.id = id;
  this.router.navigateByUrl('oner/hotelReg')
}


delete(id: any) {
  this.apiCallService.deleteApiCall("hotelDetails", id).subscribe(res=>{})
  this.showHotelDetails();
}
new(){
  this.apiCallService.new = true;
}

  }
