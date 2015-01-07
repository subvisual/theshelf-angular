'use strict';

describe('Unit: Auth CurrentUser', function() {

  var CurrentUser, DS, Headers, $rootScope;

  beforeEach(function() {
    module('theshelf.core');
    module('theshelf.auth');
    module('angular-data.mocks');
  });

  beforeEach(function(done) {
    inject(function(_$rootScope_, _CurrentUser_, _Headers_, _DS_) {
      $rootScope = _$rootScope_;
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

    it('broadcasts the currentUser has changed', function() {
      var broadcastSpy = sinon.spy($rootScope, '$broadcast');
      DS.expectFind('user', uid).respond(userFromStore);

      CurrentUser.create(userData);
      DS.flush();

      expect(broadcastSpy).to.have.been.calledWith('auth:current-user-changed', userFromStore);
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

    it('broadcasts the currentUser has changed', function() {
      var broadcastSpy = sinon.spy($rootScope, '$broadcast');
      CurrentUser.destroy();

      expect(broadcastSpy).to.have.been.calledWith('auth:current-user-changed', undefined);
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

  describe('#onChange', function() {
    it('listens for currentUser changes', function() {
      var onSpy = sinon.spy($rootScope, '$on');
      var myCallback = function MyCallback(){};

      CurrentUser.onChange(myCallback);

      expect(onSpy).to.have.been.calledWith('auth:current-user-changed', myCallback);
    });
  });
});
