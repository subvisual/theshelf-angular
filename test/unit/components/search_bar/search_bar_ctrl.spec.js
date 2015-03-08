'use strict';

describe('Unit: theshelf.components.search_bar SearchBarCtrl', function() {
  var ctrl, ctrlFn;

  beforeEach(function() {
    module('theshelf.components.search_bar');

    inject(function($controller) {
      // testing `bindToController: true`
      // see: https://github.com/angular/angular.js/issues/9425
      // TODO: LATEST NEWS: https://github.com/angular/angular.js/commit/d02d0585a086ecd2e1de628218b5a6d85c8fc7bd
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
