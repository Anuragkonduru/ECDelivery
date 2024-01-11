import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ProductDetail } from '../Interfaces/ProductDetail';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailsService {
  params = new HttpParams();

  ProductDetails!: ProductDetail;
  constructor(private http: HttpClient) {}

  getProductDetaisById(product_id: number): Observable<ProductDetail> {
    this.params = this.params.append('product_id', product_id);
    return this.http
      .get<ProductDetail>('https://dummyjson.com/products/' + product_id)
      .pipe(
        map((response) => {
          if (response) {
            const item = response;
            // console.log('http response', response);
            return {
              id: item.id,
              title: item.title,
              description: item.description,
              price: item.price,
              discountPercentage: item.discountPercentage,
              rating: item.rating,
              stock: item.stock,
              brand: item.brand,
              category: item.category,
              thumbnail: item.images[0],
              images: item.images,
            } as ProductDetail;
            // return response as ProductDetail;
          } else {
            console.log('error response');
            return null!;
          }
        })
      );
  }
}
