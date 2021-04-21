import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-empty-cart',
  templateUrl: './empty-cart.component.html',
  styleUrls: ['./empty-cart.component.css']
})
export class EmptyCartComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onClick()
  {
    this.router.navigate(['/home'])
  }
}
