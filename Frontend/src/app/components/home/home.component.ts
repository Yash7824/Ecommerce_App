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
    {
      imageUrl:
        'https://www.zdnet.com/a/img/resize/a599efb452885d4f668855aea18aae668867a960/2023/02/06/10e9ac75-29ce-4e6c-b2fb-8df48e1e40b0/oneplus-11-never-settle.jpg?auto=webp&fit=crop&height=900&width=1200',
      title: 'Mobiles',
      link: 'mobiles',
    },
    {
      imageUrl:
        'https://media.istockphoto.com/id/157482029/photo/stack-of-books.jpg?s=612x612&w=0&k=20&c=ZxSsWKNcVpEzrJ3_kxAUuhBCT3P_dfnmJ81JegPD8eE=',
      title: 'Books',
      link: 'books',
    },
    {
      imageUrl:
        'https://contents.mediadecathlon.com/p1800837/3c53c1a9be73f7e21846ab6432f264f9/p1800837.jpg?format=auto&quality=70&f=650x0',
      title: 'Clothes',
      link: 'clothes',
    },
  ];
}
