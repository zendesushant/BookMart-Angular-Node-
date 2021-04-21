import { EventEmitter, Output } from "@angular/core";
import { Subject } from "rxjs";

export class AppService
{
    fakeDbBooks:{name: string, price: number, quantity: number}[]=[{name:"FreedomFighters",price:180,quantity:3},{name:"LincolonStory",price:290,quantity:32},{name:"TheWall",price:140,quantity:15}
    ,{name:"MiddleEast",price:80,quantity:11},{name:"Aryabhatta",price:120,quantity:0},{name:"TheMissileMan",price:620,quantity:76},
    {name:"SixthSense",price:345,quantity:45},{name:"TheSky",price:220,quantity:90},{name:"WondersOfWorld",price:120,quantity:7},{name:"TheThief",price:80,quantity:9},{name:"StockMarket",price:920,quantity:56}];
 itemsAddedToCartList:{name: string, price: number, quantity: number}[] = [];
 totalShpppingPrice=0;
 cartCount:number = 0;
 cartCountEmitter = new EventEmitter<number>();
 getBooksAddedFromCart()
 {
     return [...this.itemsAddedToCartList];
 }

 updateCartList(index)
 {
    this.itemsAddedToCartList.splice(index,1)
    return [...this.itemsAddedToCartList];
 }

 

 updateTotalShoppingPrice(pirce:number)
 {
     this.totalShpppingPrice+=pirce;
 }

 getTotalShoppingPrice()
 {
     return this.totalShpppingPrice;
 }
 
 deduceShoppingPrice(index)
 {
     
    this.totalShpppingPrice=this.totalShpppingPrice-this.itemsAddedToCartList[index].price;
    return this.totalShpppingPrice;
 }

 getBookFromFakeDb()
 {
     return this.fakeDbBooks;
 }


}