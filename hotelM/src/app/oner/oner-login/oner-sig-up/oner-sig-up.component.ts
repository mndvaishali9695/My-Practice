import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/commnonScreen/commonServces/api-call.service';

@Component({
  selector: 'app-oner-sig-up',
  templateUrl: './oner-sig-up.component.html',
  styleUrls: ['./oner-sig-up.component.scss']
})
export class OnerSigUpComponent {
  sinupForm!: FormGroup;
  showWorning: boolean = true;
  gender: boolean = false;
  showpass = false;
  endPoint:string = "oner";
  constructor(private fb: FormBuilder, private apiCallService: ApiCallService,
   
    private router: Router) { }

    ngOnInit() {
      this.formDetails()
    }
    formDetails() {
      this.sinupForm = this.fb.group({
        userName: ['', Validators.required],
        email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
        panNumber: ['',[Validators.required]],
        mobileNumber: ['', [Validators.required, Validators.pattern('[0-9+]*')]],
        gender: ['male', Validators.required],
        password: ['', [Validators.required, Validators.minLength(8)]]
      })
    }
    hideHint() {
      this.showWorning = !this.showWorning;
    }
  
    showPassword() {
      this.showpass = !this.showpass
    }
  
    submit() {
      this.apiCallService.postApiCall(this.endPoint,this.sinupForm.value).subscribe((res: any)=>{})
      this.router.navigateByUrl('/oner/onerSuccess');
    } 
  
}
