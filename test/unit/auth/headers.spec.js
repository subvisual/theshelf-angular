'use strict';

describe('Unit: Auth Headers', function() {

  var Headers, $http;

  beforeEach(function() {
    module('theshelf.core');
    module('theshelf.auth');

    inject(function(_Headers_, _$http_) {
      Headers = _Headers_;
      $http = _$http_;
    });
  });

  describe('#setAuthorization', function() {
    it('sets the authorization token', function() {
      var myToken = 's0meT0k3n';

      Headers.setAuthorization(myToken);

      expect($http.defaults.headers.common.Authorization).to.equal('Token token=' + myToken);
    });
  });

  describe('#resetAuthorization', function() {
    it('resets the authorization token', function() {
      Headers.resetAuthorization();

      expect($http.defaults.headers.common.Authorization).to.be.undefined;
    });
  });
});
