function BooksListCtrl() {
  let ctrl = this;

  ctrl.books = loadBooks();

  function loadBooks() {
    return [{ title: 'SMACSS' }, { title: 'POODR' }];
  }
}

export default BooksListCtrl;
