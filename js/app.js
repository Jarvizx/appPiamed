'use strict';

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var piamedApp = angular.module('piamedApp', ['ionic', 'ngResource'])


piamedApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

piamedApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.interacciones', {
      url: "/interacciones",
      views: {
        'menuContent' :{
          templateUrl: "templates/interacciones.html",
          controller: "SearchCtrl"
        }
      } 
    })

    .state('app.plantas_medicinales', {
      url: "/plantas_medicinales",
      views: {
        'menuContent' :{
          templateUrl: "templates/plantas_medicinales.html",
          controller: "SearchCtrl"
        }
      }
    })

    .state('app.menuhome', {
      url: "/menuhome",
      views: {
        'menuContent' :{
          templateUrl: "templates/menuhome.html",
          controller: 'MenuHomeCtrl'
        }
      }
    })

    .state('app.embarazo_y_lactancia', {
      url: "/embarazo_y_lactancia",
      views: {
        'menuContent' :{
          templateUrl: "templates/embarazo_y_lactancia.html",
          controller: "SearchCtrl"
        }
      }
    })
    .state('app.alertas', {
      url: "/alertas",
      views: {
        'menuContent' :{
          templateUrl: "templates/alertas.html",
          controller: "SearchCtrl"
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/menuhome');
})

