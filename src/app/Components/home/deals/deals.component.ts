import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { ProductDetail } from 'src/app/Interfaces/ProductDetail';
import { CartService } from 'src/app/Services/cart.service';
import { HomedetailsService } from 'src/app/Services/homedetails.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css'],
})
export class DealsComponent implements OnInit {
  faCartPlus = faCartPlus;
  homeDetails!: ProductDetail[];
  constructor(
    private details: HomedetailsService,
    private router: Router,
    private cartService: CartService
  ) {
    const Result = this.details.GetApiDetails().subscribe((res) => {
      this.homeDetails = res;
    });
    console.log(Result);
  }
  ngOnInit(): void {}
  selectedProduct(event: Event, id: number) {
    console.log(event);
    console.log(id);
    this.router.navigate(['/product/' + id]);
  }
  addToCart(item: ProductDetail) {
    this.cartService.addToCart(item);
  }
  buy(item: ProductDetail) {
    this.cartService.addToCart(item);
    this.router.navigate(['/checkout']);
  }
}
