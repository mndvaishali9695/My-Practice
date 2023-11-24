import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-princilpalsuccess',
  templateUrl: './princilpalsuccess.component.html',
  styleUrls: ['./princilpalsuccess.component.scss']
})
export class PrincilpalsuccessComponent {
  name : any;
  constructor(private dataService:DataService ){}
  

  ngOnInit(){
    //getting of data fromservice
    this.name =  this.dataService.formUserName;
  }
  setSub(){
    this.dataService.city.next("Satara");
  }
}
