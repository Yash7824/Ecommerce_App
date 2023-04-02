import { Component } from '@angular/core';
import { Laptop } from 'src/app/models/Laptop';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { LaptopService } from 'src/app/services/laptop.service';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.scss'],
})
export class LaptopsComponent {
  Laptops: Laptop[] = [];

  constructor(
    private laptopService: LaptopService,
    private cartService: CartService
  ) {}
  ngOnInit() {
    this.laptopService
      .getLaptops()
      .subscribe((result: Laptop[]) => (this.Laptops = result));
  }

  SaveCart(laptop: Product) {
    for (var i = 0; i < this.cartService.CartList.length; i++) {
      if (this.cartService.CartList[i].title == laptop.title) {
        alert(`${laptop.title} is already present`);
        return;
      }
    }

    this.cartService
      .addCart(laptop)
      .subscribe(
        (response: Product[]) => (this.cartService.CartList = response)
      );

    alert(`${laptop.title} has been added to cart`);
  }
}
