function SearchBar() {
  return {
    restrict: 'E',
    templateUrl: 'components/search_bar/search_bar.html',
    scope: {
      onUserInput: '&'
    },
    controller: 'SearchBarCtrl',
    controllerAs: 'ctrl',
    bindToController: true
  };
}

export default SearchBar;
