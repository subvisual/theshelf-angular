'use strict';

function exampleDirective() {

  return {
    restrict: 'EA',
    link: function($scope, $element) {
      var log = msg => console.log(msg);
      $element.on('click', function() {
        log('element clicked');
      });
    }
  };

};

module.exports = exampleDirective;
