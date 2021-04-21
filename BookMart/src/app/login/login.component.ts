import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { AuthServices } from '../auth-services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:ActivatedRoute,private authService:AuthServices) { }
  loginForm:FormGroup;
  ngOnInit(): void {
    if(this.authService.isAuthenticated)
    this.authService.redirectToHomePage();
    else
    this.authService.logout();
    
    this.loginForm= new FormGroup({
      username:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,Validators.required)
    })
  }

  onLogin()
  {
    localStorage.setItem("user",this.loginForm.value.username);
    this.authService.onLogin(this.loginForm.value);
  }

  creatNewAccount()
  {
    this.authService.redirectToSignup();
  }

}
