import { Component } from '@angular/core';
import { Laptop } from 'src/app/models/Laptop';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { LaptopService } from 'src/app/services/laptop.service';
import { NotificationAlertService } from 'src/app/services/notification--alert.service';
import { SearchProductService } from 'src/app/services/search-product.service';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.scss'],
})
export class LaptopsComponent {
  Laptops: Laptop[] = [];

  constructor(
    private laptopService: LaptopService,
    private cartService: CartService,
    private notificationAlertService: NotificationAlertService
  ) {}
  ngOnInit() {
    this.laptopService.getLaptops().subscribe({
      next: (result) => {
        this.Laptops = result;
      },
    });
  }

  SaveCart(laptop: Product) {
    for (var i = 0; i < this.cartService.CartList.length; i++) {
      if (this.cartService.CartList[i].title == laptop.title) {
        this.notificationAlertService.showWarning(
          `already present.`,
          `${laptop.title}`
        );
        return;
      }
    }

    this.cartService
      .addCart(laptop)
      .subscribe(
        (response: Product[]) => (this.cartService.CartList = response)
      );
    this.notificationAlertService.showSuccess(
      `has been added.`,
      `${laptop.title}`
    );
  }
}
