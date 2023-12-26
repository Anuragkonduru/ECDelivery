import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetail } from 'src/app/Interfaces/ProductDetail';
import { ProductDetailsService } from 'src/app/Services/product-details.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  id!: string;
  productDetail?: ProductDetail;
  constructor(
    private route: ActivatedRoute,
    private productDetailsService: ProductDetailsService
  ) {
    this.id = this.route.snapshot.params['id'];

    const Result = this.productDetailsService
      .getProductDetaisById(this.id)
      .subscribe((response) => {
        this.productDetail = response;
      });
    console.log(Result);
  }
  ngOnInit(): void {}
}
