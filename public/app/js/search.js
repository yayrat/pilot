(function() {
  'use strict';

  angular
    .module('App')
    .directive('search', search);

  function search(){
    var directive = {
      restrict:'E',
      scope:{
      },
      templateUrl: '/templates/search.html',
      controller: Search,
      bindToController: true
    };

    return directive;
  };
  
  
  Search.$inject = ['$scope', 'dataAssistant', 'cryptoUtils'];

  function Search($scope, dataAssistant, cryptoUtils){
    
      $scope.RequestC = function(){
        var hash1 = $scope.hash1;
        var hash2 = $scope.hash2;
        var hash3 = $scope.hash3;
        var token = $scope.token;
        dataAssistant.get('/eth/RequestC/hash1&hash2&hash3&token').then(function(data){            
            $scope.search_result = data;
            var event = 
        },function(error){
            $scope.search_error = error;
        });
      };
      
      $scope.Request = function(){
        var hash1 = $scope.hash1;
        var hash2 = $scope.hash2;
        var hash3 = $scope.hash3;
        var token = $scope.token;
        dataAssistant.get('/eth/Request/hash1&hash2&hash3&token').then(function(data){            
            $scope.search_result = data;
        },function(error){
            $scope.search_error = error;
        });
      };
      
      $scope.calcHash1 = function(){
        $scope.hash1 = cryptoUtils.SHA256($scope.firstname);
      }
      
      $scope.calcHash2 = function(){
        $scope.hash2 = cryptoUtils.SHA256($scope.lastname);
      }
      
      $scope.calcHash3 = function(){
        $scope.hash3 = cryptoUtils.SHA256($scope.bday.toString());
      }
      
      $scope.calcToken = function(){
        $scope.token = cryptoUtils.SHA256($scope.token);
      }
    
  }  
  
})();	