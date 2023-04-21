import { Component } from '@angular/core';
import { Cloth } from 'src/app/models/Cloth';
import { CartService } from 'src/app/services/cart.service';
import { ClothService } from 'src/app/services/cloth.service';
import { NotificationAlertService } from 'src/app/services/notification--alert.service';
import { SearchProductService } from 'src/app/services/search-product.service';

@Component({
  selector: 'app-cloth',
  templateUrl: './cloth.component.html',
  styleUrls: ['./cloth.component.scss'],
})
export class ClothComponent {
  Clothes: Cloth[] = [];

  constructor(
    private clothService: ClothService,
    private cartService: CartService,
    private notificationAlertService: NotificationAlertService,
    private searchProductService: SearchProductService
  ) {}

  ngOnInit() {
    this.clothService.getClothes().subscribe({
      next: (response) => {
        this.Clothes = response;
      },
    });
  }

  SaveCart(cloth: Cloth) {
    for (var i = 0; i < this.cartService.CartList.length; i++) {
      if (this.cartService.CartList[i].title == cloth.title) {
        this.notificationAlertService.showWarning(
          `is already present`,
          `${cloth.title}`
        );

        return;
      }
    }

    this.cartService.addCart(cloth).subscribe({
      next: (response) => {
        this.cartService.CartList = response;
      },
    });

    this.notificationAlertService.showSuccess(
      `has been added.`,
      `${cloth.title}`
    );
  }
}
