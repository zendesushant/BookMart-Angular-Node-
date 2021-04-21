import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import * as EventEmitter from 'events';
import { Subject } from 'rxjs';
import { AppService } from '../auth-services/app.service';
import { AuthServices } from '../auth-services/auth.service';
//import {mimeType} from '../auth-services/mime-type.validator'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private route:ActivatedRoute,private authService:AuthServices,private appService:AppService) {

  }
  searchedBook='';

  // books:{name:string,price:number,quantity:number}[]=[{name:"FreedomFighters",price:180,quantity:3},{name:"Lincolon Story",price:290,quantity:32},{name:"The Wall",price:140,quantity:15}
  // ,{name:"Middle East",price:80,quantity:11},{name:"Aryabhatta",price:120,quantity:0}];
  books:{name:string,price:number,quantity:number}[]=this.appService.getBookFromFakeDb();
  @Input() bookArray;
  ngOnInit(): void {
    
    
}

}

