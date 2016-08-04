/**
 * @author David - xDevel
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardPageCtrl', DashboardPageCtrl);

  /** @ngInject */
  function DashboardPageCtrl($resource) {
  	var vm = this;
  	vm.res = {};

  	$resource('/teste').get().$promise
  		.then(function (data) {
  			vm.res = data;
  		})
  		.catch(function (error) {
  			console.log(error);
  		});

  }

})();