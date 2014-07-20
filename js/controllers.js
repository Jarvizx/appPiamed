'use strict';
piamedApp.controller('AppCtrl', function($scope, $ionicModal, $timeout, SettingsService) {
  SettingsService.set('maxResults',"50");
 
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  },

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
  
  ionic.Platform.ready(function(){
    // console.log('ready');
  });
})

piamedApp.controller('SearchCtrl', function($scope, PiamedService, $ionicModal) {

  $scope.request = {};

  var doSearch = ionic.debounce(function(request){
    
    if (request.query!=null) {

      PiamedService.search(request).then(function(resp){
          
          $scope.appResults = resp;
          console.log($scope.appResults);
          
          if ($scope.appResults.numero_resultados == 0)
            $scope.infoTxt = 'No se han encontrado resultados';

      });

    }

   }, 500);

  $scope.search = function(){
    //here free $scope: $scope.request.tema && $scope.request.query
    $scope.infoTxt = null;
    doSearch($scope.request);
  }

  $ionicModal.fromTemplateUrl('views/plantas_medicinales.html', function(modal) {
      $scope.goModal = modal;
  }, {
      scope: $scope,
      animation: 'slide-in-up'
  });

  $scope.checkResult = function(item) {
    $scope.goModal.show();
  };

  $scope.closeModal = function() {
    $scope.goModal.hide();
  }


})

piamedApp.controller('MenuHomeCtrl', function($scope) {

})