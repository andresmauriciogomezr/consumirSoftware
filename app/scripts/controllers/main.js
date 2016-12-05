'use strict';

/**
 * @ngdoc function
 * @name consumerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the consumerApp
 */
angular.module('consumerApp')
  .controller('MainCtrl', function (HomeFactory, $routeParams) {

    var vm = this;

    
    vm.mensaje = 'sisas';
        //console.log(datos.data);
       //vm.paises = datos.data;
    //});
    

    vm.libros = [];

    vm.menuTemplate = {
    	url : 'views/generico.html'
    }, 

    HomeFactory.getLibros().then(function(datos){
        vm.libros = datos.data;
    });

    vm.cambarPrecio = function(){
        console.log('ojala');
        //HomeFactory.cambarPrecio();
    };



  });
