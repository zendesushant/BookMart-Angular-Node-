import { Component, OnInit } from '@angular/core';
import { AppService } from '../auth-services/app.service';
import { AuthServices } from '../auth-services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartCount=0;
  username;
  constructor(private authService:AuthServices,private appService:AppService) {

   }

  ngOnInit(): void {
    this.username=localStorage.getItem("user");
    this.cartCount = this.appService.cartCount;
    this.appService.cartCountEmitter.subscribe((cartCount:number)=>{
        this.cartCount = cartCount;
    })
  }
  redirectToLogout()
  {
    this.authService.logout();
  }
}
