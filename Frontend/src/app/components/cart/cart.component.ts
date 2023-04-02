import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  productList: Product[] = [];
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService
      .getCarts()
      .subscribe((response: Product[]) => (this.productList = response));
  }

  RemoveProduct(product: Product) {
    this.cartService
      .deleteCart(product)
      .subscribe((response: Product[]) => (this.productList = response));
  }
}
