'use strict';

/**
 * @ngdoc function
 * @name consumerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the consumerApp
 */
angular.module('consumerApp')
  .controller('MainCtrl', function (HomeFactory, $routeParams, toastr, $location) {

    var vm = this;

    vm.mensaje = 'hola';

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

    vm.iniciar= function(){
        console.log('iniciando');
    };

    vm.error= function(){
        toastr.error('Debe inciar seción antes de comprar un artículo', 'Error');
    };

    vm.compra = {
        'idLIbro' : '',
        'email' : '',
        'numeroTarjeta' : '',
        'password' : ''
    };
    


    vm.comprar= function(id, email){
        var datos = {'id' : id, 'email' : email};
        //$location.path('/comprar');
        //toastr.success(respuesta.error, 'Error');
        HomeFactory.comprar(datos);
    };



  });
