(function () {
    'use strict';

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.items = '';
        $scope.message = '';

        $scope.check = function () {
            console.log('check() function');

            var items = $scope.items;
            var total = countItems(items);

            if (total === 0) {
                changeCss('red');
                $scope.message = 'Please enter data first';
            } else if (total <= 3) {
                changeCss('green');
                $scope.message = 'Enjoy!';
            } else {
                changeCss('green');
                $scope.message = 'Too much!';
            }
        };

            function changeCss(color) {
                changeMessageColor(color);
                changeMessageBorder(color);
            }

            function changeMessageBorder(color) {
                document.getElementById('lunch-menu')
                    .style.borderColor = color;
            }

            function changeMessageColor(color) {
                document.getElementsByClassName('message')[0]
                    .style.color = color;
            }

            function countItems(items) {
                var total = [];
                var result = items.split(',');
                console.log(result);

                for (var i = 0; i < result.length; i++) {
                    // clean empty string
                    result[i] = result[i].replace(/\s+/g, '');

                    // create new array with string length > 0
                    if (result[i].length > 0) {
                        total.push(result[i]);
                    }
                }

                console.log(total);
                return total.length;
            }
        }

        angular
            .module('LunchCheck', [])
            .controller('LunchCheckController', LunchCheckController);

    }

    )();