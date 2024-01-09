import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Catagories } from '../Interfaces/Catagories';
import { ProductDetail } from '../Interfaces/ProductDetail';

@Injectable({
  providedIn: 'root',
})
export class HomedetailsService {
  // headers = new HttpHeaders({
  //   'X-RapidAPI-Key': '89adb07f33mshcf70143dcbf7faep15dbd5jsnc990b01b333a',
  //   'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com',
  // });
  params = new HttpParams();
  grouped: Catagories[] = [];
  groupedCatrogories: Catagories[] = [];
  ProductCards!: ProductDetail[];
  constructor(private http: HttpClient) {
    this.params = this.params.append('q', 'deals');
  }

  GetCatogories(): Observable<Catagories[]> {
    console.log('Sending request');
    return this.http.get<any>('https://dummyjson.com/products').pipe(
      map((response) => {
        if (response && response.products) {
          const productreturn = (products = response.products) => {
            if (products) {
              return this.groupProducts(products) as Catagories[];
            } else {
              console.log('error response');
              return [];
            }
          };
          return productreturn() as Catagories[];
        } else {
          console.log('error response');
          return [];
        }
      })
    );
  }
  groupProducts(products: ProductDetail[]) {
    products.forEach((product: ProductDetail) => {
      const existingCategory = this.grouped.find(
        (category) => category.catagory === product.category
      );
      if (existingCategory) {
      } else {
        this.grouped.push({
          catagory: product.category,
          images: [
            product.images[0],
            product.images[1],
            product.images[2],
            product.images[3],
          ],
        });
      }
    });
    return this.grouped;
  }

  GetApiDetails(): Observable<ProductDetail[]> {
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
  }
}
