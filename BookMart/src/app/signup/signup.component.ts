import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthServices } from '../auth-services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm:FormGroup
  constructor(private authService:AuthServices) { }
  isLoading=false;
  ngOnInit(): void {
    this.signUpForm= new FormGroup({
      username:new FormControl(null,[Validators.required,Validators.email]/*,this.validateUserName.bind(this)*/),
      password:new FormControl(null,Validators.required),
      mobile:new FormControl(null,Validators.required)
    })
  }
  onSignUp()
  {
    
    this.authService.onSignUp(this.signUpForm.value);
    this.authService.spinnerStatus.subscribe((status)=>this.isLoading=status)
  }

  validateUserName(control:AbstractControl):Promise<any> | Observable<any>
  {

    return this.authService.validateUserName(control.value).pipe(map(data=>{

      if(data)
      {
        return {"UserNameAlreadyExist":true}
      }
      else
      {
        return null;
      }
    }));
  }
}
