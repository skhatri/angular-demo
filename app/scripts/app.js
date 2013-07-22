'use strict';

var app = angular.module('week3App', ['uitools']);

//config
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/math', {
            templateUrl: 'views/math.html',
            controller: 'MathCtrl'
        })
        .when('/vaibhav', {
            templateUrl: 'views/vaibhav.html',
            controller: 'VaibhavCtrl'
        })
        .when('/sushil', {
            templateUrl: 'views/sushil.html',
            controller: 'SushilCtrl'
        })
        .when('/datetime', {
            templateUrl: 'views/datetime.html',
            controller: 'DateCtrl'
        })
        .when('/generated', {
            templateUrl: 'views/dynamic.html',
            controller: 'DynamicCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});

var myApp = angular.module('week3App');

myApp.controller('MainCtrl', function ($scope) {
    $scope.m = {};

    $scope.makeUpper = function () {
        $scope.m.result = $scope.m.message.toUpperCase();
    };

    $scope.$watch('m.message', function (newValue) {
        console.log('hey message changed. i got called. ' + newValue);
        $scope.m.result = newValue ? newValue.toUpperCase() : newValue;
    });

})
    .controller('MathCtrl', function ($scope) {
        $scope.m = {};

        $scope.add = function () {
            var a = parseInt($scope.m.num1, 10);
            var b = parseInt($scope.m.num2, 10);
            $scope.m.result = a + b;
        };


        $scope.$watch('m.num1', function (newValue) {
            $scope.m.result = parseInt(newValue, 10) + parseInt($scope.m.num2, 10);
        });

        $scope.$watch('m.num2', function (newValue) {
            $scope.m.result = parseInt($scope.m.num1, 10) + parseInt(newValue, 10);
        });


    })
    .controller('VaibhavCtrl',function ($scope) {
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
    })
    .controller('DateCtrl', function ($scope) {
        $scope.appointment = {};
        $scope.onDateSelect = function (newValue) {
            console.log('i got this date. shall i do something else with it ' + newValue);
            console.log('start time be updated as datetimepicker is bound to model ' + $scope.appointment.joinDate);
        };
        $scope.onStartTimeSelect = function (newValue) {
            console.log('i got this date. shall i do something else with it ' + newValue);
            console.log('appointment date should be updated as datetimepicker is bound to model ' + $scope.appointment.startTime);
        }
    })
    .controller('DynamicCtrl', function ($scope) {
        $scope.dynamic = {itemCount: 1, items: [
            {}
        ]};
        $scope.itemArray = function () {
            var itemCount = parseInt($scope.dynamic.itemCount, 10);
            $scope.syncItemCount();
            var all = [];
            for (var i = 0; i < itemCount; i += 1) {
                all.push(i);
            }
            return all;
        }
        $scope.syncItemCount = function () {
            if (!$scope.dynamic.items) {
                $scope.dynamic.items = [];
            }
            var itemCount = parseInt($scope.dynamic.itemCount, 10);
            for (var i = 0; i < itemCount; i += 1) {
                $scope.dynamic.items[i] = $scope.dynamic.items[i] || {};
            }
        };
    });

