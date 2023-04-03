import { Component } from '@angular/core';
import { Cloth } from 'src/app/models/Cloth';
import { CartService } from 'src/app/services/cart.service';
import { ClothService } from 'src/app/services/cloth.service';

@Component({
  selector: 'app-cloth',
  templateUrl: './cloth.component.html',
  styleUrls: ['./cloth.component.scss'],
})
export class ClothComponent {
  Clothes: Cloth[] = [];

  constructor(
    private clothService: ClothService,
    private cartService: CartService
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
        alert(`${cloth.title} is already present`);
        return;
      }
    }

    this.cartService.addCart(cloth).subscribe({
      next: (response) => {
        this.cartService.CartList = response;
      },
    });

    alert(`${cloth.title} has been added`);
  }
}
