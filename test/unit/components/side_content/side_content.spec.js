'use strict';

describe('Unit: theshelf.components.side_content SideContent', function() {
  var element, scope;

  function compileDirective() {
    inject(function($rootScope, $compile) {
      element = angular.element('<side-content></side-content>');

      scope = $rootScope.$new();

      element = $compile(element)(scope);

      scope.$digest();
    });
  }

  describe('user is signed in', function() {
    var logoutSpy, currentUser;

    beforeEach(function(){
      currentUser = {
        name: function(){ return 'user name'; }
      };
      logoutSpy = sinon.spy();

      module('theshelf.components.side_content', function($controllerProvider) {
        $controllerProvider.register('SideContentCtrl', function() {
          this.currentUser = currentUser;
          this.logout = logoutSpy;
        });
      });
      module('karma.templates');


      compileDirective();
    });

    it('shows user info', function() {
      expect(element.children().text()).to.contain(currentUser.name());
    });

    it('calls logout when the logout link is clicked', function() {
      element.children().find('a')[0].click();
      expect(logoutSpy).to.have.been.called;
    });
  });

  describe('user is not signed in', function() {
    beforeEach(function(){
      module('theshelf.components.side_content', function($controllerProvider) {
        $controllerProvider.register('SideContentCtrl', function() {
          this.currentUser = undefined;
        });
      });
      module('karma.templates');

      compileDirective();
    });

    /* jshint quotmark: false */
    it("doesn't show any information", function() {
      expect(element.children().attr('class')).to.contain('ng-hide');
    });
  });
});
