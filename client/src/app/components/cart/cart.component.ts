import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  productList: Product[] = [];
  constructor(private cartService: CartService) {}

  sumOfProducts = 0;

  ngOnInit(): void {
    this.cartService
      .getCarts()
      .subscribe((response: Product[]) => (this.productList = response));

    for (var i = 0; i < this.productList.length; i++) {
      this.sumOfProducts =
        this.sumOfProducts + Number(this.productList[i].price);
    }
  }

  RemoveProduct(product: Product) {
    this.cartService
      .deleteCart(product)
      .subscribe((response: Product[]) => (this.productList = response));
  }

  ShowTotal() {
    for (var i = 0; i < this.productList.length; i++) {
      this.sumOfProducts =
        this.sumOfProducts + Number(this.productList[i].price);
    }
  }
}
