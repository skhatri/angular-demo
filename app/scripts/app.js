'use strict';

var app = angular.module('week3App', []);

//config
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/vaibhav', {
            templateUrl: 'views/vaibhav.html',
            controller: 'VaibhavCtrl'
        })
        .when('/sushil', {
            templateUrl: 'views/sushil.html',
            controller: 'SushilCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});

var myApp = angular.module('week3App');

myApp.controller('MainCtrl',function ($scope) {
    $scope.m = {};

    $scope.makeUpper = function () {
        $scope.m.result = $scope.m.message.toUpperCase();
    };

    $scope.$watch('m.message', function(newValue){
        console.log('hey message changed. i got called. ' + newValue);
        $scope.m.result = newValue.toUpperCase();
    });

}).controller('VaibhavCtrl',function ($scope) {
        $scope.interests = {

        };
        $scope.interests.awesomeThings = [
            'Cricket',
            'India',
            'Sushmita Sen'
        ];
        $scope.interests.cities = ["Canberra", "Sydney"];

    }).controller('SushilCtrl', function ($scope) {
        $scope.awesomeThings = [
            'Nepal',
            'Mt Everest',
            'Momo'
        ];
        $scope.friends = ["Sanjay", "Vaibhav"];
    });

