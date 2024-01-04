import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductDetail } from '../Interfaces/ProductDetail';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private CartItems: ProductDetail[] = [];
  private CartItemsSubject = new BehaviorSubject<ProductDetail[]>([]);

  constructor() {
    // this.CartItemsSubject.next([...this.CartItems]);
    // console.log('Cart Constructor' + this.CartItemsSubject);
  }
  addToCart(item: ProductDetail) {
    // console.log('item : ');
    // console.log(item);
    this.CartItems.push(item);
    // console.log('CartItems : ');
    // console.log(this.CartItems);
    this.CartItemsSubject.next([...this.CartItems]);
    // console.log('CartItemsSubject : ');
    // console.log(this.CartItemsSubject);
  }
  findIndexWithId(id: number): number {
    let index = this.CartItems.findIndex((obj) => obj.id === id);
    console.log(this.CartItems);
    console.log('index');
    console.log(index);
    return index;
  }
  removeFromCart(id: number) {
    this.CartItems.splice(this.findIndexWithId(id), 1);
    this.CartItemsSubject.next([...this.CartItems]);
  }
  getCartItems() {
    return this.CartItemsSubject.asObservable();
  }
}
