import { Component, EventEmitter, Output } from '@angular/core';
import { faCartPlus, faStore } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  faCartPlus = faCartPlus;
  faStore = faStore;
  CartItemsCount: number = 0;
  queryText: string = '';

  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((Items) => {
      this.CartItemsCount = Items.length;
    });
  }


}
