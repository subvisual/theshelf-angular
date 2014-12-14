'use strict';

class SearchBarCtrl {
  constructor() {
  }

  handleChange() {
    this.onUserInput({searchText:this.input});
  }
}

module.exports = SearchBarCtrl;
