import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { NotificationAlertService } from 'src/app/services/notification--alert.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  productList: Product[] = [];
  constructor(
    private cartService: CartService,
    private notificationAlertService: NotificationAlertService,
    private router: Router
  ) {}

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
    this.notificationAlertService.showError(
      `has been removed`,
      `${product.title}`
    );
  }

  ShowTotal() {
    this.sumOfProducts = 0;
    for (var i = 0; i < this.productList.length; i++) {
      this.sumOfProducts =
        this.sumOfProducts + Number(this.productList[i].price);
    }
  }

  Buy() {
    this.router.navigate(['checkOut']);
  }
}
