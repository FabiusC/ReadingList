# English - User Manual

## Overview
This application allows users to manage a list of books, with the ability to search, filter, and move books between a main list and a reading list. The application also provides a feature to persist the reading list across sessions using local storage.

## Features
1. **Search and Filter Books**: 
   - You can search for books by the number of pages, genre, and specific text (title, author, etc.).
   - The number of books in both the main list and the reading list is displayed.

2. **Drag and Drop Functionality**:
   - You can drag books from the main list to the reading list and vice versa.
   - When a book is moved to the reading list, it is removed from the main list to avoid duplication.

3. **Persist Reading List**:
   - The reading list is saved in the local storage, ensuring that your list remains intact even after closing and reopening the browser.

4. **Clear Search**:
   - A button to clear the search filters and reset the displayed books.

## How to Use

### 1. Searching for Books
- **Pages Filter**: 
  - Use the range slider to set the maximum number of pages.
  - The input number field allows for exact page number input. Both fields are synchronized.
- **Genre Filter**: 
  - Select the desired genre from the dropdown menu.
- **Text Search**: 
  - Enter any specific keyword (e.g., title, author) in the search bar to filter books.
- **Search Button**: 
  - Click "Search" to apply the filters.
- **Clear Button**: 
  - Click "Clear" to remove all filters and display the full list of books.

### 2. Managing Your Reading List
- **Adding a Book**: 
  - Drag a book from the main list to the reading list.
  - The book will automatically disappear from the main list and appear in the reading list.
- **Removing a Book**: 
  - To remove a book from the reading list, click the "X" button on the top left of the book's card.
  - The book will be moved back to the main list.

### 3. Viewing the Book Count
- **Book Count**: 
  - The number of books currently displayed in the main list and the reading list is shown next to the respective sections.

## Technical Notes
- The application uses local storage to keep the reading list persistent across browser sessions.
- Books are filtered in the following order: by pages, by genre, and finally by text.

---

# Español - Manual de Usuario

## Descripción General
Esta aplicación permite a los usuarios gestionar una lista de libros, con la capacidad de buscar, filtrar y mover libros entre una lista principal y una lista de lectura. La aplicación también ofrece una función para mantener la lista de lectura persistente a través de sesiones utilizando el almacenamiento local.

## Funcionalidades
1. **Buscar y Filtrar Libros**: 
   - Puedes buscar libros por el número de páginas, género y texto específico (título, autor, etc.).
   - Se muestra el número de libros tanto en la lista principal como en la lista de lectura.

2. **Funcionalidad de Arrastrar y Soltar**:
   - Puedes arrastrar libros de la lista principal a la lista de lectura y viceversa.
   - Cuando un libro se mueve a la lista de lectura, se elimina de la lista principal para evitar duplicados.

3. **Mantener la Lista de Lectura**:
   - La lista de lectura se guarda en el almacenamiento local, asegurando que tu lista permanezca intacta incluso después de cerrar y volver a abrir el navegador.

4. **Limpiar Búsqueda**:
   - Un botón para limpiar los filtros de búsqueda y restablecer los libros mostrados.

## Cómo Usar

### 1. Buscar Libros
- **Filtro de Páginas**: 
  - Usa el deslizador para establecer el número máximo de páginas.
  - El campo de número permite la entrada exacta de la cantidad de páginas. Ambos campos están sincronizados.
- **Filtro de Género**: 
  - Selecciona el género deseado en el menú desplegable.
- **Búsqueda por Texto**: 
  - Introduce cualquier palabra clave específica (por ejemplo, título, autor) en la barra de búsqueda para filtrar libros.
- **Botón de Búsqueda**: 
  - Haz clic en "Search" para aplicar los filtros.
- **Botón de Limpiar**: 
  - Haz clic en "Clear" para eliminar todos los filtros y mostrar la lista completa de libros.

### 2. Gestionar tu Lista de Lectura
- **Agregar un Libro**: 
  - Arrastra un libro de la lista principal a la lista de lectura.
  - El libro desaparecerá automáticamente de la lista principal y aparecerá en la lista de lectura.
- **Eliminar un Libro**: 
  - Para eliminar un libro de la lista de lectura, haz clic en el botón "X" en la parte superior izquierda de la tarjeta del libro.
  - El libro se moverá de nuevo a la lista principal.

### 3. Ver el Conteo de Libros
- **Conteo de Libros**: 
  - El número de libros actualmente mostrados en la lista principal y en la lista de lectura se muestra junto a las respectivas secciones.

## Notas Técnicas
- La aplicación utiliza el almacenamiento local para mantener la lista de lectura persistente a través de las sesiones del navegador.
- Los libros se filtran en el siguiente orden: por páginas, por género y finalmente por texto.
