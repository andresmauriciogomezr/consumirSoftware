'use strict';

/**
 * @ngdoc function
 * @name consumerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the consumerApp
 */
angular.module('consumerApp')
  .controller('AboutCtrl', function () {
     var vm = this;

    vm.menuTemplate = {
    	url : 'views/generico.html'
    }
  });
