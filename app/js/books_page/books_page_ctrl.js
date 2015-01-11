export default class BooksPageCtrl {
  constructor() {
    this.searchText = '';
  }

  handleUserInput(input) {
    this.searchText = input;
  }
}
