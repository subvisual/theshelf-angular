class SearchBarCtrl {
  constructor() {
  }

  handleChange() {
    this.onUserInput({searchText:this.input});
  }
}

export default SearchBarCtrl;
