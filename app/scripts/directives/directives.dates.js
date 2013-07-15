(function () {

    'use strict';

    var uitools = angular.module('uitools', []);

    (function () {
        'use strict';

        var lpad = function (n, size) {
            var len = String(n).length;
            for (var i = len; i < size; i += 1) {
                n = '0' + n;
            }
            return n;
        };


        var format = function (date) {
            if (!date) {
                return '';
            }
            var dd = date.getDate();
            var month = date.getMonth() + 1;
            var yyyy = date.getYear() + 1900;

            return lpad(dd, 2) + '/' + lpad(month, 2) + '/' + yyyy;
        };

        var formatTimestamp = function (date) {
            if (!date) {
                return '';
            }
            var min = date.getMinutes();
            var hours = date.getHours();
            var sec = date.getSeconds();

            return format(date) + ' ' + lpad(hours, 2) + ':' + lpad(min, 2) + ':' + lpad(sec, 2);
        };


        uitools.factory('DateUtil', function () {
            return {
                formatDate: format,
                formatTimestamp: formatTimestamp
            };
        });


    }());


    uitools.directive('datetimepicker', ['DateUtil', function (DateUtil) {
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function (scope, element, attrs, model) {
                if (!model) {
                    return;
                }
                var pickTime = false;

                if (scope.picktime === undefined || String(scope.picktime) === 'true') {
                    pickTime = true;
                }
                var widgetOptions = {
                    language: 'pt-BR',
                    pickTime: pickTime
                };
                element.bind('changeDate', function (newValue) {
                    scope.$apply(function () {
                        var formattedDate = '';
                        if (newValue.localDate) {
                            formattedDate = pickTime ? DateUtil.formatTimestamp(newValue.localDate) : DateUtil.formatDate(newValue.localDate);
                            model.$setViewValue(formattedDate);
                        }
                        if (typeof scope.onselectdate === 'function') {
                            scope.onselectdate({date: formattedDate});
                        }
                    });
                });
                element.datetimepicker(widgetOptions);
            },
            scope: {
                picktime: '=',
                onselectdate: '&'
            }
        };
    }]);

}());