(function(){
  'use strict';

  angular
      .module('starter')
      .controller('myCtrl',myCtrl);

      myCtrl.$inject = ['$http','$ionicLoading','$state'];

      function myCtrl($http,$ionicLoading,$state){
        var vm = this;

        vm.users = [];

        vm.solicitar = solicitar;
        vm.proxima = proxima;

        function solicitar(){
          $ionicLoading.show({
            content:'loading'
          });
          $http.get('http://jsonplaceholder.typicode.com/users')
            .then(function(response){
              $ionicLoading.hide();
              console.log(response);
              vm.users = response.data;
          }).catch(function(error){
              $ionicLoading.hide();
          });
        }

        function proxima(){
          $state.go('page01');
        }
      }
})();
