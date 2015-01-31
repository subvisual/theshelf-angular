'use strict';

describe('Unit: theshelf.components.side_content SideContentCtrl', function() {
  var ctrl;

  beforeEach(function() {
    module('theshelf.core');
    module('theshelf.components.side_content');

    inject(function($controller) {
      ctrl = $controller;
    });
  });

  describe('#currentUser', function(){
    /* jshint quotmark: false */
    it("updates when Session's currentUser changes", function(){
      var myUser = 'myUser';
      var SessionMock = { currentUser: myUser };

      ctrl = ctrl('SideContentCtrl', { Session: SessionMock });

      expect(ctrl.currentUser()).to.equal(myUser);
    });
  });

  describe('#logout', function(){
    it('logs out', function(){
      var destroySpy = sinon.spy();
      var SessionMock = { destroy: destroySpy };

      ctrl = ctrl('SideContentCtrl', { Session: SessionMock });

      ctrl.logout();

      expect(destroySpy).to.have.been.called;
    });

    it('redirects to the login page', function(){
      var goSpy = sinon.spy();
      var stateMock = { go: goSpy };
      var SessionMock = { destroy: sinon.stub() };

      ctrl = ctrl('SideContentCtrl', { $state: stateMock, Session: SessionMock });

      ctrl.logout();

      expect(stateMock.go).to.have.been.calledWith('Login');
    });
  });
});
