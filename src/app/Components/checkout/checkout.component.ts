import { Component, OnInit } from '@angular/core';
import { ProductDetail } from 'src/app/Interfaces/ProductDetail';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  CartItems: ProductDetail[] = [];
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((Items) => {
      this.CartItems = [...Items];
    });
  }
  deleteItem(id: number) {
    console.log(id);
    this.cartService.removeFromCart(id);
  }
}
