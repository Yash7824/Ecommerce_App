import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  HomePage = [
    {
      imageUrl:
        'http://images.summitmedia-digital.com/spotph/images/2022/06/30/guide-to-everyhing-laptop-640-1656580338.jpg',
      title: 'Laptops',
      link: 'laptops',
    },
  ];
}
