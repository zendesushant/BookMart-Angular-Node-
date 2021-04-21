import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AppService } from '../auth-services/app.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cartlist
  totalShpppingPrice;
  constructor(private appService:AppService) {
    
   }

 
  
  ngOnInit(): void {

    this.cartlist=[...this.appService.getBooksAddedFromCart()];
    this.totalShpppingPrice=this.appService.getTotalShoppingPrice();
    
  }
  removeItemFromCart(index)
  {
    this.totalShpppingPrice=this.appService.deduceShoppingPrice(index)
    this.cartlist=this.appService.updateCartList(index);
    this.appService.cartCount = this.appService.cartCount - 1;
    this.appService.cartCountEmitter.emit(this.appService.cartCount);

  }

  onPlaceOrder()
  {
  
  }
}
