import { Injectable } from '@angular/core';
import { HomeDetails } from '../Interfaces/HomeDetails';

@Injectable({
  providedIn: 'root',
})
export class HomedetailsService {

  HomeDetailsData: HomeDetails[] = [
    {
      id: 1,
      imageUrl:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Title: 'Headphones',
      MRP: 5000,
      price: 4999,
    },
    {
      id: 2,
      imageUrl:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Title: 'nike ahoes',
      MRP: 800,
      price: 600,
    },
    {
      id: 3,
      imageUrl:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Title: 'white watch',
      MRP: 700,
      price: 500,
    },
    {
      id: 4,
      imageUrl:
        'https://images.unsplash.com/photo-1593998066526-65fcab3021a2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Title: 'Classic Watch',
      MRP: 15000,
      price: 14999,
    },
    {
      id: 5,
      imageUrl:
        'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Title: 'Xbox controller',
      MRP: 5000,
      price: 4999,
    },
    {
      id: 6,
      imageUrl:
        'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Title: 'Headphones 2',
      MRP: 5000,
      price: 4999,
    },
  ];
  constructor() {}
  getDetailsById(id: number){
    return this.HomeDetailsData.find((item) => item.id === id)
  }
}
