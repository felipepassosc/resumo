angular.module('aplicacao').controller('resumoController', function ($scope) {

    $scope.y = function () {
        // const input = "I hope you find someone who's real with you. someone who's capable of telling you when you're wrong, when you're about to make a mistake. I hope you find someone who's not afraid to love. someone who's not afraid to get hurt. I hope you find more than just a lover. I hope you find a friend, and I hope they love you, really love you and I hope they love themselves as well. I hope you find someone who cares, but not just someone who cares about you but also someone who cares about others, someone who cares about making a difference, about leaving some kind of mark in the world. to heal it, change it for the best. in the most genuine way, i hope someone like this finds you, whether you're searching for them or not.";

        Algorithmia.client("simgVJK4pqBS47QRLAD/uzsoVY81")
            .algo("nlp/Summarizer/0.1.8?timeout=300") // timeout is optional
            .pipe($scope.texto)
            .then(function (output) {
                $scope.z = output.result
                console.log(output.result)
            });
    }
})