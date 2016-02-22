(function(){
  'use strict';
  angular
      .module('starter')
      .factory('inteceptor',inteceptor);

      inteceptor.$inject = ['$cordovaNetwork'];

      function inteceptor($cordovaNetwork){
        return {
          request : request,
          response: response
        };

        function request(config){
          if(window.Connection){
            if($cordovaNetwork.isOffline()){
              alert('Sem conexão com internet');
              return null;
            }
          }
          return config;
        }

        function response(config){
          if(window.Connection){
            if($cordovaNetwork.isOffline()){
              alert('Sem conexão com internet');
              return null;
            }
          }
          return config;
        }
      }

})();
