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
  discountedPrice: any[] = [];
  TotalPrice: number = 0;
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((Items) => {
      this.CartItems = [...Items];
    });
    this.CartItems.forEach((element) => {
      const dealprice: number = element.price - element.discountPercentage;
      console.log(dealprice);
      this.discountedPrice.push(dealprice);
      this.TotalPrice = this.TotalPrice + dealprice;
    });
  }
  deleteItem(id: number) {
    console.log(id);
    this.cartService.removeFromCart(id);
  }
}
