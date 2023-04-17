import { Component, DoCheck, OnInit } from '@angular/core';
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

  sumOfProducts: number = 0;

  ngOnInit() {
    this.cartService.getCarts().subscribe({
      next: (response) => {
        this.productList = response;
        this.cartService.CartList = response;
      },
    });
  }

  ngDoCheck() {
    this.ShowTotal();
  }

  RemoveProduct(product: Product) {
    this.cartService
      .deleteCart(product)
      .subscribe((response: Product[]) => (this.productList = response));
  }

  ShowTotal() {
    this.sumOfProducts = 0;
    for (var i = 0; i < this.productList.length; i++) {
      this.sumOfProducts =
        this.sumOfProducts + Number(this.productList[i].price);
    }
  }
}
