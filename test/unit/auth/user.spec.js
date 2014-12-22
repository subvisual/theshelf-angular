'use strict';

describe('Unit: Auth User', function() {

  var User;

  beforeEach(function() {
    module('theshelf.core');
    module('theshelf.auth');

    inject(function(_User_) {
      User = _User_;
    });
  });

  describe('#name', function() {
    it('returns first name followed by last name', function() {
      User.inject({ id: 1, first_name: 'John', last_name: 'Anderson' });

      var user = User.get(1);

      expect(user.name()).to.equal('John Anderson');
    });
  });
});
