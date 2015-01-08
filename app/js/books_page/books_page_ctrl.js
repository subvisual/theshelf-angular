function BooksPageCtrl() {
  let ctrl = this;

  ctrl.handleUserInput = handleUserInput;
  ctrl.searchText = '';

  function handleUserInput(input) {
    ctrl.searchText = input;
  }
}

export default BooksPageCtrl;
