'use strict';

angular.module('consumerApp').controller('LoginCtrl', function(authUser){

	var vm = this;
	vm.loginForm = {
		
		'email' : 'andresmauriciogomezr@gmail.com',
		'password' : 'millonarios'
	};

	vm.login = function(){
		authUser.loginApi(vm.loginForm);
	};

	vm.menuTemplate = {
    	url : 'views/generico.html'
    };
});