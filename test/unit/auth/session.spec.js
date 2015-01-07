'use strict';

describe('Unit: Auth Session', function() {

  var Session, SessionStorage, CurrentUser, DS;

  beforeEach(function() {
    module('theshelf.core');
    module('theshelf.auth');
    module('angular-data.mocks');
  });

  beforeEach(function(done) {
    inject(function(_Session_, _SessionStorage_, _CurrentUser_, _DS_) {
      Session = _Session_;
      SessionStorage = _SessionStorage_;
      CurrentUser = _CurrentUser_;
      DS = _DS_;
      done();
    });
  });

  describe('#onCurrentUserChanged', function() {
    it('listens for currentUser changes', function() {
      var onChangeSpy = sinon.stub(CurrentUser, 'onChange');
      var myCallback = function MyCallback(){};

      Session.onCurrentUserChanged(myCallback);

      expect(onChangeSpy).to.have.been.calledWith(myCallback);
    });
  });

  describe('#restore', function() {
    describe('user is authenticated', function() {
      var sessionData = { id: 1, token: 't0ken' };

      beforeEach(function() {
        sinon.stub(SessionStorage, 'retrieve', function(){ return sessionData; });
      });

      it('sets the current user', function() {
        var createSpy = sinon.stub(CurrentUser, 'create');

        Session.restore();

        expect(createSpy).to.have.been.calledWith(sessionData);
      });
    });

    describe('user is not authenticated', function() {
      beforeEach(function() {
        sinon.stub(SessionStorage, 'retrieve');
      });

      /* jshint quotmark: false */
      it("doesn't do anything", function() {
        var createSpy = sinon.stub(CurrentUser, 'create');

        Session.restore();

        expect(createSpy).not.to.have.been.called;
      });
    });
  });

  describe('#create', function() {
    var email = 'some@email.com';
    var password = 'somepass';
    var requestParams = { user: { email: email, password: password } };

    it('returns a promise', function() {
      DS.expectCreate('session', requestParams).respond({});

      expect(Session.create(email, password)).to.respondTo('then');
    });

    it('does a POST request to /session', function() {
      sinon.stub(SessionStorage, 'create');
      sinon.stub(CurrentUser, 'create');
      DS.expectCreate('session', requestParams).respond({});

      Session.create(email, password);
      DS.flush();
    });

    describe('POST /session is fullfilled', function() {
      var id = 1;
      var token = 's0meT0k3n';
      /* jshint camelcase: false */
      var sessionResponse = { id: id, email: email, authentication_token: token };
      var sessionData = { uid: id, token: token };
      var createCurrentUserStub, sessionStorageStub;

      beforeEach(function() {
        DS.expectCreate('session', requestParams).respond(sessionResponse);
        sessionStorageStub = sinon.stub(SessionStorage, 'create');
        createCurrentUserStub = sinon.stub(CurrentUser, 'create');

        Session.create(email, password);
        DS.flush();
      });

      it('stores session data', function() {
        expect(sessionStorageStub).to.have.been.calledWith(sessionData);
      });

      it('creates current user', function() {
        expect(createCurrentUserStub).to.have.been.calledWith(sessionData);
      });
    });

    describe('POST /session is rejected', function() {
      it('rejects with Invalid Credentials message', function() {
        DS.expectCreate('session', requestParams).respond(new Error(''));

        var createPromise = Session.create(email, password);
        DS.flush();

        createPromise.then(
          function(){},
          function(reason){
            expect(reason).to.equal('Invalid credentials');
          }
        );
      });
    });
  });

  describe('#destroy', function() {
    var destroyStub, resetStub;

    beforeEach(function(){
      destroyStub = sinon.stub(SessionStorage, 'destroy');
      resetStub = sinon.stub(CurrentUser, 'destroy');
    });

    it('destroys session data', function() {
      Session.destroy();

      expect(destroyStub).to.have.been.called;
    });

    it('resets current user', function() {
      Session.destroy();

      expect(resetStub).to.have.been.called;
    });
  });

  describe('currentUser property', function() {
    it('returns the current user', function() {
      var user = 'some user object';
      var mock = sinon.mock(CurrentUser).expects('retrieve').returns(user);

      var currentUser = Session.currentUser;

      expect(currentUser).to.equal(user);
      mock.verify();
    });
  });

  describe('isAuthenticated property', function() {
    it('returns true if the user is signed in', function() {
      var mock = sinon.mock(SessionStorage).expects('retrieve').returns({ id: 1 });

      var isAuthenticated = Session.isAuthenticated;

      expect(isAuthenticated).to.be.true;
      mock.verify();
    });

    it('returns false if the user is not signed in', function() {
      var mock = sinon.mock(SessionStorage).expects('retrieve').returns(undefined);

      var isAuthenticated = Session.isAuthenticated;

      expect(isAuthenticated).to.be.false;
      mock.verify();
    });
  });
});
