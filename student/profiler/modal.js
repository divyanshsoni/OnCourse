var app = angular.module('modalApp', ['ui.bootstrap']);

/*----- Modal Controllers -----*/
// For displaying & creating  project -----------------
app.controller("projectModalCtrl", ['$scope', '$modal', '$log',

    function ($scope, $modal, $log) {

        $scope.addProjectDialog = function (){
            $scope.message = "Show Form Button Clicked";
            console.log($scope.message);

            var modalInstance = $modal.open({
                templateUrl: 'add-project-modal.html',
                controller: addProjectModalInstanceCtrl,
                scope: $scope,
                resolve: {
                    projectForm: function () {
                        return $scope.projectForm;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        $scope.editProjectDialog = function (project){
            $scope.message = "Show Form Button Clicked";
            console.log($scope.message);
            $scope.project = project;

            var modalInstance = $modal.open({
                templateUrl: 'edit-project-modal.html',
                controller: editProjectModalInstanceCtrl,
                scope: $scope,
                resolve: {
                    projectForm: function () {
                        return $scope.projectForm;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
}]);

var addProjectModalInstanceCtrl = function ($scope, $modalInstance, projectForm) {
    $scope.form = {}
    $scope.submitForm = function () {
        if ($scope.form.projectForm.$valid) {
            console.log('project form is in scope');
            console.log($scope.form.projectForm.title);
            $modalInstance.close('closed');
        } else {
            console.log('projectForm is not in scope');
        }
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};

var editProjectModalInstanceCtrl = function ($scope, $modalInstance, projectForm) {
    $scope.form = {}
    $scope.submitForm = function () {
        if ($scope.form.projectForm.$valid) {
            console.log('project form is in scope');
            console.log($scope.form.projectForm.title);
            $modalInstance.close('closed');
        } else {
            console.log('projectForm is not in scope');
        }
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};
