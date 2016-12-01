'use strict';

angular.module('consumerApp')
.controller('MenuCtrl', function($location, authUser, $scope, sessionControl){

	var vm = this;

	vm.isLogin = authUser.isLoggedIn();

	$scope.$watch(function(){
		return authUser.isLoggedIn();
	}, function(newVal){
		if(typeof newVal != 'undefined'){
			vm.isLogin = authUser.isLoggedIn();
		}
	});

	$scope.$watch(function(){
		return sessionControl.get('username');
	}, function(newVal){
		if(typeof newVal != 'undefined'){
			vm.user.name = sessionControl.get('username');
		}
	});	

	$scope.$watch(function(){
		return sessionControl.get('email');
	}, function(newVal){
		if(typeof newVal != 'undefined'){
			vm.user.email = sessionControl.get('email');
		}
	});	

	vm.user = {
		email : sessionControl.get('email'),
		name : sessionControl.get('username')
	};

	vm.logout = function(){
		authUser.logout();
	};

	vm.isActive  = function(viewLocation){
		return viewLocation == $location.path();
	};

});