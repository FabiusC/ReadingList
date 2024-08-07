import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Book } from '../../models/models.module';
import { BookService } from '../book.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  readingList: Book[] = [];
  booksFound: Book[] = [];

  searchText: string = '';
  searchPages: number = 0;
  searchGenre: string = '';

  booksAmount: number = 0;
  listAmount: number = 0;

  constructor(
    private bookService: BookService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe((books: Book[]) => {
      this.books = books;
      this.loadReadingList();
      this.filterBooks(); // Filtrar libros para que no aparezcan en la lista si están en readingList
      this.updateCounters(); // Actualizar contadores al cargar la lista
    });
  }

  loadReadingList() {
    if (isPlatformBrowser(this.platformId)) {
      const savedList = localStorage.getItem('readingList');
      this.readingList = savedList ? JSON.parse(savedList) : [];
    }
  }

  saveReadingList() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('readingList', JSON.stringify(this.readingList));
    }
  }

  search() {
    this.booksFound = this.bookService.search(
      this.searchPages,
      this.searchGenre,
      this.searchText
    );
    this.filterBooks(); // Filtrar los libros que ya están en la lista de lectura
  }

  clearSearch() {
    // Limpiar los campos de búsqueda
    this.searchText = '';
    this.searchPages = 0;
    this.searchGenre = '';
    this.booksFound = [];
    this.filterBooks(); // Filtrar los libros que ya están en la lista de lectura
  }

  filterBooks() {
    this.booksFound = this.booksFound.filter(
      (book) => !this.readingList.some((b) => b.ISBN === book.ISBN)
    );
    this.books = this.books.filter(
      (book) => !this.readingList.some((b) => b.ISBN === book.ISBN)
    );
  }

  syncInputs(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.searchPages = Number(inputElement.value);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent, action: string) {
    event.preventDefault();
    const data = event.dataTransfer?.getData('text/plain');
    if (data) {
      const book: Book = JSON.parse(data);

      if (
        action === 'add' &&
        !this.readingList.some((b) => b.ISBN === book.ISBN)
      ) {
        this.readingList.push(book);
        this.books = this.books.filter((b) => b.ISBN !== book.ISBN); // Eliminar de la lista de libros
        this.saveReadingList();
        this.updateCounters(); // Actualizar contadores después de agregar a la lista de lectura
      } else if (action === 'remove') {
        this.books.push(book);
        this.readingList = this.readingList.filter((b) => b.ISBN !== book.ISBN); // Eliminar de la lista de lectura
        this.saveReadingList();
        this.updateCounters(); // Actualizar contadores después de remover de la lista de lectura
      }
    }
  }

  onDragStart(event: DragEvent, book: Book) {
    event.dataTransfer?.setData('text/plain', JSON.stringify(book));
  }

  removeFromReadingList(book: Book) {
    this.books.push(book);
    this.readingList = this.readingList.filter((b) => b.ISBN !== book.ISBN);
    this.saveReadingList();
    this.updateCounters(); // Actualizar contadores después de remover de la lista de lectura
  }

  updateCounters() {
    this.booksAmount = this.books.length;
    this.listAmount = this.readingList.length;
  }
}
