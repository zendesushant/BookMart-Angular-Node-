import { Component, OnInit } from '@angular/core';
import { AuthServices } from './auth-services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BookMart';

  constructor(private authService:AuthServices){}
  ngOnInit()
  {
    this.authService.AutoLogin();
  }
}
