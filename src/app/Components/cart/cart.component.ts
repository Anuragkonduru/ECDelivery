import { Component, OnInit } from '@angular/core';
import { ProductDetail } from 'src/app/Interfaces/ProductDetail';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  CartItems: ProductDetail[] = [];
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((Items) => {
      this.CartItems = [...Items];
      // console.log('this.CartItems:');
      // console.log([...this.CartItems]);
    });
  }
  deleteItem(id: number) {
    console.log(id);
    this.cartService.removeFromCart(id);
  }
}
