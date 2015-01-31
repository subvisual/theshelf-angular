'use strict';

describe('Unit: Auth CurrentUser', function() {

  var CurrentUser, DS, Headers;

  beforeEach(function() {
    module('theshelf.core');
    module('theshelf.auth');
    module('angular-data.mocks');
  });

  beforeEach(function(done) {
    inject(function(_CurrentUser_, _Headers_, _DS_) {
      CurrentUser = _CurrentUser_;
      Headers = _Headers_;
      DS = _DS_;
      done();
    });
  });

  describe('#create', function() {
    var uid = 1;
    var token = 't0k3n';
    /* jshint camelcase: false */
    var userFromStore = { id: uid, first_name: 'Sally' };
    var userData = { uid: uid, token: token };

    it('searches the User store', function() {
      DS.expectFind('user', uid).respond(userFromStore);

      CurrentUser.create(userData);
      DS.flush();
    });

    it('sets currentUser', function() {
      DS.expectFind('user', uid).respond(userFromStore);

      CurrentUser.create(userData);
      DS.flush();

      expect(CurrentUser.retrieve()).to.equal(userFromStore);
    });

    it('sets authorization headers', function() {
      var setAuthorizationStub = sinon.stub(Headers, 'setAuthorization');
      DS.expectFind('user', uid).respond(userFromStore);

      CurrentUser.create(userData);
      DS.flush();

      expect(setAuthorizationStub).to.have.been.calledWith(token);
    });
  });

  describe('#destroy', function() {
    it('sets currentUser to undefined', function() {
      CurrentUser.destroy();

      expect(CurrentUser.retrieve()).to.be.undefined;
    });

    it('resets authorization headers', function() {
      var resetAuthorizationStub = sinon.stub(Headers, 'resetAuthorization');

      CurrentUser.destroy();

      expect(resetAuthorizationStub).to.have.been.called;
    });
  });

  describe('#retrieve', function() {
    it('returns undefined when currentUser is not set', function() {
      expect(CurrentUser.retrieve()).to.be.undefined;
    });

    it('returns the currentUser', function() {
      var uid = 1;
      /* jshint camelcase: false */
      var user = { id: uid, first_name: 'Sally' };
      DS.expectFind('user', uid).respond(user);
      CurrentUser.create({ uid: uid });
      DS.flush();

      expect(CurrentUser.retrieve()).to.equal(user);
    });
  });
});
