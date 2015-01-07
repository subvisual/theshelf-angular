'use strict';

describe('Unit: SideContent SideContentCtrl', function() {
  var ctrl, $timeout;

  beforeEach(function() {
    module('theshelf.core');
    module('theshelf.side_content');

    inject(function($controller, _$timeout_) {
      ctrl = $controller;
      $timeout = _$timeout_;
    });
  });

  /* jshint quotmark: false */
  it("registers a listener for Session's currentUser changes", function(){
    var onCurrentUserChangeSpy = sinon.spy();
    var SessionMock =  { onCurrentUserChanged: onCurrentUserChangeSpy };

    ctrl = ctrl('SideContentCtrl', { Session: SessionMock });

    expect(onCurrentUserChangeSpy).to.have.been.called;
  });

  describe('currentUser property', function(){
    /* jshint quotmark: false */
    it("updates when Session's currentUser changes", function(){
      var myUser = 'myUser';
      var SessionMock = { currentUser: myUser,
                          onCurrentUserChanged: function(cb) {
                            $timeout(function(){ cb(); }, 0);
                          }
                        };

      ctrl = ctrl('SideContentCtrl', { Session: SessionMock });

      expect(ctrl.currentUser).not.to.equal(myUser);
      $timeout.flush();
      expect(ctrl.currentUser).to.equal(myUser);
    });
  });

  describe('#logout', function(){
    it('logs out', function(){
      var destroySpy = sinon.spy();
      var SessionMock = {
                          destroy: destroySpy,
                          onCurrentUserChanged: sinon.stub()
                        };

      ctrl = ctrl('SideContentCtrl', { Session: SessionMock });

      ctrl.logout();

      expect(destroySpy).to.have.been.called;
    });

    it('redirects to the login page', function(){
      var goSpy = sinon.spy();
      var stateMock = { go: goSpy };
      var SessionMock = {
                          destroy: sinon.stub(),
                          onCurrentUserChanged: sinon.stub()
                        };

      ctrl = ctrl('SideContentCtrl', { $state: stateMock, Session: SessionMock });

      ctrl.logout();

      expect(stateMock.go).to.have.been.calledWith('Login');
    });
  });
});
