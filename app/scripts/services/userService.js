'use strict';


angular.module('consumerApp')
	.factory('CrearUsuario', function($resource){
		//return $resource('http://localhost/software/registrar');
		return $resource('http://software.goodfirmcolombia.co/registrar');
	});