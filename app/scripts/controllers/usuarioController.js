angular.module('consumerApp')
.controller('UsuarioCtrl', function($scope, CrearUsuario, toastr, $resource, authUser){
	$scope.mensaje = 'es el mensaje de prueba';

	$scope.Usuario = {};	
	//console.log($scope.credenciales);
	$scope.registrarUsuario = function(){
		$scope.credenciales = {		
			'email' : $scope.Usuario.email,
			'password' : $scope.Usuario.password
		};
		resultado = CrearUsuario.save($scope.Usuario, 
			function(respuesta){				
				if(respuesta.token){
					authUser.loginApi($scope.credenciales);
				}else{
					toastr.error(respuesta.error, 'Error');
				}
			});		
	}

	var vm = this;

});