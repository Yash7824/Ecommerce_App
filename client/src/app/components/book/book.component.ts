import { Component } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { BookService } from 'src/app/services/book.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  Books: Book[] = [];

  constructor(
    private bookService: BookService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe({
      next: (response) => {
        this.Books = response;
      },
    });
  }

  SaveCart(book: Book) {
    for (var i = 0; i < this.cartService.CartList.length; i++) {
      if (this.cartService.CartList[i].title == book.title) {
        alert(`${book.title} is already present`);
        return;
      }
    }

    this.cartService.addCart(book).subscribe({
      next: (response) => {
        this.cartService.CartList = response;
      },
    });

    alert(`${book.title} has been added`);
  }
}
