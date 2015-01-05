'use strict';

describe('Unit: SearchBar SearchBarCtrl', function() {
  var ctrl, ctrlFn;

  beforeEach(function() {
    module('theshelf.search_bar');

    inject(function($controller) {
      // testing `bindToController: true`
      // see: https://github.com/angular/angular.js/issues/9425
      ctrlFn = $controller('SearchBarCtrl', {}, true);
    });
  });

  describe('#handleChange', function() {
    it('calls onUserInput callback passing the input property', function() {
      var onUserInputSpy = sinon.spy();
      ctrlFn.instance.onUserInput = onUserInputSpy;
      ctrl = ctrlFn();

      ctrl.handleChange();

      expect(onUserInputSpy).to.have.been.calledWith({searchText:ctrl.input});
    });
  });
});
