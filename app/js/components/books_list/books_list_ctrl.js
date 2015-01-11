class BooksListCtrl {
  constructor() {
    this.books = this.loadBooks();
  }

  loadBooks() {
    return [{ title: 'SMACSS' }, { title: 'POODR' }];
  }
}

export default BooksListCtrl;
