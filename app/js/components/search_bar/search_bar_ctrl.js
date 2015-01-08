function SearchBarCtrl() {
  let ctrl = this;

  ctrl.handleChange = handleChange;

  function handleChange() {
    ctrl.onUserInput({searchText:ctrl.input});
  }
}

export default SearchBarCtrl;
