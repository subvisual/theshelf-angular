function SideContent() {
  return {
    restrict: 'E',
    templateUrl: 'components/side_content/side_content.html',
    scope: {},
    controller: 'SideContentCtrl',
    controllerAs: 'ctrl',
    bindToController: true
  };
}

export default SideContent;
