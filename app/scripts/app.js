'use strict';

/**
 * @ngdoc overview
 * @name consumerApp
 * @description
 * # consumerApp
 *
 * Main module of the application.
 */
angular
  .module('consumerApp', [
    'authService',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'satellizer',
    'toastr'
  ])
  .config(function ($routeProvider, $authProvider) {
    //$authProvider.loginUrl = 'http://localhost/software/autenticar';
    $authProvider.loginUrl = 'http://software.goodfirmcolombia.co/autenticar';
    
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/cambiar-precio/:pais',{
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/registrar', {
        templateUrl: 'views/registrar.html',
        controller: 'UsuarioCtrl',
        controllerAs: 'controlador'
      });

  })
  .run(function($rootScope, $location, authUser, toastr){
    var rutasPrivadas = ['/about'];

    $rootScope.$on('$routeChangeStart', function(){
      if(($.inArray($location.path(), rutasPrivadas) != -1 && !authUser.isLoggedIn())){
        console.log('pasa');
        toastr.error('Debe iniciar sesión', 'Mensaje');
        $location.path('login');
      }

    });
  });