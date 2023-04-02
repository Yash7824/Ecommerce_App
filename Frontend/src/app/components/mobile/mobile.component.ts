import { Component } from '@angular/core';
import { Mobile } from 'src/app/models/Mobile';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { MobileService } from 'src/app/services/mobile.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss'],
})
export class MobileComponent {
  Mobiles: Mobile[] = [];
  constructor(
    private mobileService: MobileService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.mobileService.getMobiles().subscribe({
      next: (response) => {
        this.Mobiles = response;
      },
    });
  }

  SaveCart(mobile: Product) {
    for (var i = 0; i < this.cartService.CartList.length; i++) {
      if (this.cartService.CartList[i].title == mobile.title) {
        alert(`${mobile.title} is already present`);
        return;
      }
    }

    this.cartService
      .addCart(mobile)
      .subscribe(
        (response: Product[]) => (this.cartService.CartList = response)
      );

    alert(`${mobile.title} has been added`);
  }
}
