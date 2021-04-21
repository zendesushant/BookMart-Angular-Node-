import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
import { combineAll } from 'rxjs/operators';
import { AppService } from '../auth-services/app.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  constructor(private appService:AppService) { }
  
  @Input() booksData
  ngOnInit(): void {
    // this.appService.updateCart.emit(this.appService.itemsAddedToCartList.length);
  }

  addToCart(bookData:{name:string,price:number,quantity:number})
  {

    this.appService.itemsAddedToCartList.push(bookData);
    this.appService.updateTotalShoppingPrice(bookData.price);
    this.appService.cartCount = this.appService.cartCount + 1;
    this.appService.cartCountEmitter.emit(this.appService.cartCount);
    
  }

}
