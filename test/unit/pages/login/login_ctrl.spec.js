'use strict';

describe('Unit: theshelf.pages.login LoginCtrl', function() {

  var scope, ctrl, $q;

  beforeEach(function() {
    module('theshelf.core');
    module('theshelf.pages.login');

    inject(function($rootScope, $controller, _$q_) {
      scope = $rootScope.$new();
      ctrl = $controller;
      $q = _$q_;
    });
  });

  var resolvePromise = function() {
    return function() {
      var deferred = $q.defer();
      deferred.resolve();
      return deferred.promise;
    };
  };

  var rejectPromise = function(rejectReason) {
    return function() {
      var deferred = $q.defer();
      deferred.reject(rejectReason);
      return deferred.promise;
    };
  };

  describe('#login', function() {
    it('calls Session.create()', function() {
      var SessionMock = { create: resolvePromise() };
      sinon.spy(SessionMock, 'create');
      ctrl = ctrl('LoginCtrl', { Session: SessionMock });
      ctrl.email = 'email@somewhere.com';
      ctrl.password = 'pass';

      ctrl.login();

      expect(SessionMock.create).to.have.been.calledWith(ctrl.email, ctrl.password);
    });

    it('redirects to the home page', function() {
      var SessionMock = { create: resolvePromise() };
      var goSpy = sinon.spy();
      var stateMock = { go: goSpy };
      ctrl = ctrl('LoginCtrl', { $state: stateMock, Session: SessionMock });

      ctrl.login();
      scope.$digest();

      expect(stateMock.go).to.have.been.calledWith('Home');
    });

    describe('dataLoading property', function() {
      it('is set to true when the promise is pending', function() {
        var SessionMock = { create: resolvePromise() };
        ctrl = ctrl('LoginCtrl', { Session: SessionMock });

        ctrl.login();

        expect(ctrl.dataLoading).to.be.true;
      });

      it('is set to false when the promise is fullfilled', function() {
        var SessionMock = { create: resolvePromise() };
        ctrl = ctrl('LoginCtrl', { Session: SessionMock });

        ctrl.login();
        scope.$digest();

        expect(ctrl.dataLoading).to.be.false;
      });

      it('is set to false when the promise is rejected', function() {
        var SessionMock = { create: rejectPromise() };
        ctrl = ctrl('LoginCtrl', { Session: SessionMock });

        ctrl.login();
        scope.$digest();

        expect(ctrl.dataLoading).to.be.false;
      });
    });

    describe('error property', function() {
      /* jshint quotmark: false */
      it("is equal to the rejected promise's reason", function() {
        var rejectReason = 'some error message';
        var SessionMock = { create: rejectPromise(rejectReason) };
        ctrl = ctrl('LoginCtrl', { Session: SessionMock });

        ctrl.login();
        scope.$digest();

        expect(ctrl.error).to.equal(rejectReason);
      });
    });
  });
});
