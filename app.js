angular
    .module('inputIconDemo', [])
    .controller('DemoCtrl', function($scope) {
        $scope.ListArray = [];
        $scope.button = Dropbox.createChooseButton({
            success: function(files) {
                $scope.ListArray.push(files[0].link)
            },
            linkType: 'direct',
            multiselect:true,
            extensions : ['.pdf', '.doc', '.docx','.png','.jpg','.txt']
        });
        document.getElementById('container').appendChild($scope.button);
        $scope.showList = function (){
            for(i=0; i<$scope.ListArray.length;i++){
                alert($scope.ListArray[i])
            }
        }
    }
);