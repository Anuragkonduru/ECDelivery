import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ProductDetail } from '../Interfaces/ProductDetail';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailsService {
  headers = new HttpHeaders({
    'X-RapidAPI-Key': '89adb07f33mshcf70143dcbf7faep15dbd5jsnc990b01b333a',
    'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com',
  });
  params = new HttpParams();

  ProductDetails!: ProductDetail;
  constructor(private http: HttpClient) {}

  getProductDetaisById(product_id: string): Observable<ProductDetail> {
    this.params = this.params.append('product_id', product_id);
    return this.http
      .get<any>(
        'https://real-time-product-search.p.rapidapi.com/product-details',
        {
          params: this.params,
          headers: this.headers,
        }
      )
      .pipe(
        map((response) => {
          if (response && response.data && response.data.product) {
            const item = response.data.product;
            return {
              product_id: item.product_id,
              product_id_v2: item.product_id_v2,
              product_title: item.product_title,
              product_description: item.product_description,
              product_photo: item.product_photos[0],
              product_photos: item.product_photos,
              product_attributes: item.product_attributes,
              product_rating: item.product_rating,
              product_page_url: item.product_page_url,
              product_num_reviews: item.product_num_reviews,
              product_num_offers: item.product_num_offers,
              typical_price_range: item.typical_price_range,
              product_variant_properties: item.product_variant_properties,
              product_variants: item.product_variants,
              price: item.offer.price,
              original_price: item.offer.original_price,
              offer: {
                shipping: item.offer.shipping,
                tax: item.offer.tax,
                on_sale: item.offer.on_sale,
                product_condition: item.offer.product_condition,
              },
            } as ProductDetail;
          } else {
            console.log('error response');
            return null!;
          }
        })
      );
  }
}
