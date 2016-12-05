'use strict';


angular.module('consumerApp')
.factory('HomeFactory', function($http, $resource){

	var url = 'http://software.goodfirmcolombia.co/listar-libros';
	var paisesUrl = 'http://software.goodfirmcolombia.co/listar-paises';

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
			cambarPrecio : function(){
		        console.log('hola');
		        console.log(pais);
		    }
	};
	
});