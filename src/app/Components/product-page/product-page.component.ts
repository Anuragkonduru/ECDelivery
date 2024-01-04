import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetail } from 'src/app/Interfaces/ProductDetail';
import { CartService } from 'src/app/Services/cart.service';
import { ProductDetailsService } from 'src/app/Services/product-details.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  id!: number;
  productDetail: ProductDetail = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: '',
    images: [],
  };
  DealPrice!: number;
  constructor(
    private route: ActivatedRoute,
    private productDetailsService: ProductDetailsService,
    private cartService: CartService,
    private router: Router
  ) {
    this.id = this.route.snapshot.params['id'];

    this.productDetailsService
      .getProductDetaisById(this.id)
      .subscribe((response) => {
        // console.log(response);
        this.productDetail = response;
        this.DealPrice =
          this.productDetail!.price - this.productDetail!.discountPercentage;
        // console.log(this.productDetail);
      });
  }
  ngOnInit(): void {}

  addToCart(item: ProductDetail) {
    this.cartService.addToCart(item);
    // this.router.navigate(['/cart']);
  }
}
