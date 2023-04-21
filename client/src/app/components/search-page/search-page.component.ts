import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { NotificationAlertService } from 'src/app/services/notification--alert.service';
import { SearchProductService } from 'src/app/services/search-product.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent {
  SearchedProducts = this.searchProductService.searchproducts;

  constructor(
    private cartService: CartService,
    private notificationAlertService: NotificationAlertService,
    private searchProductService: SearchProductService
  ) {}

  SaveCart(product: Product) {
    for (var i = 0; i < this.cartService.CartList.length; i++) {
      if (this.cartService.CartList[i].title == product.title) {
        this.notificationAlertService.showWarning(
          `already present.`,
          `${product.title}`
        );
        return;
      }
    }

    this.cartService
      .addCart(product)
      .subscribe(
        (response: Product[]) => (this.cartService.CartList = response)
      );
    this.notificationAlertService.showSuccess(
      `has been added.`,
      `${product.title}`
    );
  }
}
