import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ProductCard } from '../Interfaces/ProductCard';

@Injectable({
  providedIn: 'root',
})
export class HomedetailsService {
  headers = new HttpHeaders({
    'X-RapidAPI-Key': '89adb07f33mshcf70143dcbf7faep15dbd5jsnc990b01b333a',
    'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com',
  });
  params = new HttpParams();

  ProductCards!: ProductCard[];
  constructor(private http: HttpClient) {
    this.params = this.params.append('q', 'deals');
  }

  GetApiDetails(): Observable<ProductCard[]> {
    console.log('Sending request');
    return this.http.get<any>('https://dummyjson.com/products').pipe(
      map((response) => {
        if (response && response.products) {
          return response.products.map((item: any) => ({
            id: item.id,
            title: item.title,
            description: item.description,
            price: item.price,
            discountPercentage: item.discountPercentage,
            rating: item.rating,
            stock: item.stock,
            brand: item.brand,
            category: item.category,
            thumbnail: item.thumbnail,
            images: item.images,
          }));
        } else {
          console.log('error response');
          return [];
        }
      })
    );
    // .get<any>('https://real-time-product-search.p.rapidapi.com/search', {
    //   params: this.params,
    //   headers: this.headers,
    // })
    // .pipe(
    //   map((response) => {
    //     if (response && response.data) {
    //       return response.data.map((item: any) => ({
    //         product_id: item.product_id,
    //         product_id_v2: item.product_id_v2,
    //         product_title: item.product_title,
    //         product_description: item.product_description,
    //         product_photo: item.product_photos[0],
    //         product_rating: item.product_rating,
    //         product_page_url: item.product_page_url,
    //         product_num_reviews: item.product_num_reviews,
    //         typical_price_range: item.typical_price_range,
    //         price: item.offer.price,
    //         original_price: item.offer.original_price,
    //       }));
    //     } else {
    //       console.log('error response');
    //       return [];
    //     }
    //   })
    // );
  }
}
