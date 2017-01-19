(function() {
  'use strict';

  angular
    .module('App')
    .directive('add', add);

  function add(){
    var directive = {
      restrict:'E',
      scope:{
      },
      templateUrl: '/templates/add.html',
      controller: Add,
      bindToController: true
    };

    return directive;
  };
  
  
  Add.$inject = ['$scope', 'dataAssistant', 'cryptoUtils'];

  function Add($scope, dataAssistant, cryptoUtils){

    $scope.add = function(){        
        var hash1 = $scope.hash1;
        var hash2 = $scope.hash2;
        var hash3 = $scope.hash3;
        var token = $scope.hash4;
        dataAssistant.get('/eth/AddHash/hash1&hash2&hash3&token').then(function(data){
            
            $scope.add_result = data;
        },function(error){
            $scope.add_error = error;
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
    
    $scope.calcHash4 = function(){
      $scope.hash4 = cryptoUtils.SHA256($scope.token);
    }
    
  }

  
  
})();	
