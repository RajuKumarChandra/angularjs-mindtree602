 var mainApp = angular.module("mainApp", []);
         
         mainApp.controller('studentController', function($scope) {

               $scope.firstName = "vindhya";
               $scope.lastName = "Pujari";
               $scope.email = "vindhya.itc@gmail.com";
               var x = $scope.firstName;
               $scope.width = 10;
         });