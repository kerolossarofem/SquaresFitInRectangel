angular.module('SquaresInRectangle', ['colorpicker.module'])
    .controller('DrawController', ['$scope', '$http', '$templateCache',
        function($scope, $http) {

            $scope.width = 1;
            $scope.height = 1;
            $scope.pickedColor='#000000'
            $scope.maxSquareNumbers = 50000;
            $scope.scales = [1, 2, 3, 4, 5, 6,7,8,9,10];
            $scope.scale=1;

            $scope.draw = function() {
                $scope.squares = null;
                $scope.error = null;
                var req = {
                    method: 'POST',
                    url: '/squares',
                    data: {
                        width: $scope.width,
                        hight: $scope.height
                    }
                };
                $http(req).then(function(response){
                    $scope.squares = response.data.result;
                }, function(error){
                    $scope.error = error.data.error.message;
                });
            };
        }
    ]);