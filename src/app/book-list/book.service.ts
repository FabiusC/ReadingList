import { Injectable } from '@angular/core';
import { Book } from '../models/models.module';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private booksUrl = 'assets/data/books.json'; // Ruta corregida al archivo JSON
  private bookList: Book[] = [];

  constructor(private http: HttpClient) {}

  // Método para cargar los libros desde el archivo JSON
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl).pipe(
      tap((books: Book[]) => this.bookList = books)
    );
  }

  // Método para buscar libros según los filtros aplicados
  search(searchPages: number, searchGenre: string, searchText: string): Book[] {
    let booksFound: Book[] = this.bookList;
    console.log(`Books found: ${booksFound.length}`);
    // Filtrar por número de páginas
    if (searchPages > 0) {
      booksFound = booksFound.filter(book => book.pages <= searchPages);
    } else if (searchGenre.toLowerCase() != '') { // Filtrar por género
      booksFound = booksFound.filter(book => book.genre.toLowerCase().includes(searchGenre.toLowerCase()));
    } else if (searchText.toLowerCase() != '') { // Filtrar por texto
      booksFound = booksFound.filter(book => this.searchBooksByText(searchText, book));
    } else {
      booksFound = [];
    }
    return booksFound;
  }

  // Método privado para buscar libros por texto
  private searchBooksByText(searchText: string, book: Book): boolean {
    searchText = searchText.toLowerCase();
    return (
      book.title.toLowerCase().includes(searchText) ||
      book.synopsis.toLowerCase().includes(searchText) ||
      book.ISBN.toLowerCase().includes(searchText) ||
      book.author.name.toLowerCase().includes(searchText)
    );
  }
}
