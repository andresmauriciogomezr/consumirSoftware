'use strict';


angular.module('consumerApp')
.factory('HomeFactory', function($http, $resource, toastr){

	var url = 'http://software.goodfirmcolombia.co/listar-libros';
	var paisesUrl = 'http://software.goodfirmcolombia.co/listar-paises';
	var comprarUrl = 'http://software.goodfirmcolombia.co/comprar';

	return {

			getLibros : function(){
				return $http.get(url).success(function(datos){
					return (datos);
				}).error(function(error){
					console.log(error);
				})
			},
			getPaises : function(){
				//return $http.get(paisesUrl).success(function(datos){
				//	return (datos);
				//}).error(function(error){
				//	console.log(error);
				//})
				return $http.get(paisesUrl).success(function(datos){
					return (datos);
				}).error(function(error){
					console.log(error);
				})
			},
			comprar : function(datos){
		        return $http.post(comprarUrl, {'data':datos}).success(function(respuesta){
		        	toastr.success('Usted ha comprado un nuveo libro. Su numero de compra es: ' + respuesta.ticket, 'Error');
					return (respuesta);
				}).error(function(error){
					console.log(error);
				})
		    }
	};
	
});