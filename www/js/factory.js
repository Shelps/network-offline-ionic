(function(){
  'use strict';
  angular
      .module('starter')
      .factory('inteceptor',inteceptor);

      inteceptor.$inject = ['$cordovaNetwork'];

      function inteceptor($cordovaNetwork,$ionicPopup){
        console.log('Entrou factory');
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
          console.log('Resposta');
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
