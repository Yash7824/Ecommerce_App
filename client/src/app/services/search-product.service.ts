import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class SearchProductService {
  constructor() {}

  AllProducts: Product[] = [];
  searchproducts: Product[] = [];
}
