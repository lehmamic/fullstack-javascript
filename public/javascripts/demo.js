(function () {
    'use strict';

    // Create the module and define its dependencies.
    var app = angular.module('demo', [
        // Angular modules 
        //'ngAnimate',        // animations
        //'ngRoute'           // routing

        // Custom modules 

        // 3rd Party Modules

    ]);

    app.controller('CommentsController', ['$scope', '$http', function($scope, $http){

        $scope.comments = [];
        $scope.title = '';
        $scope.content = ''
        $scope.sendComment = send;

        function loadComments() {
            $http.get('/comments').success(function (comments){
                $scope.comments = comments;
            });
        }

        function send() {
            $http.post('/comments', { title: $scope.title,  content: $scope.comment  })
                .success(function (data) {
                    $scope.comments.push(data);
                });
        }

        loadComments();
    }])
})();