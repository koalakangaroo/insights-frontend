'use strict';

var componentsModule = require('../');
const find = require('lodash/find');

/**
 * @ngInject
 */
function systemMetadataCtrl(
    $rootScope,
    $scope,
    InsightsConfig,
    System,
    SystemsService) {

    if ($scope.system && $scope.system.system_id) {
        $scope.loading = true;
        System.getSystemMetadata($scope.system.system_id)
        .then(function (metadata) {
            $scope.initialMetadata =
                SystemsService.getInitialSystemMetadata($scope.system, metadata.data);
            $scope.systemMetadata =
                SystemsService.getSystemMetadata($scope.system, metadata.data);
            $scope.loading = false;
        });
    }

    $scope.getSystemType = function () {
        return find($scope.systemMetadata, {category: 'system'}).type;
    };

    $scope.hasMetadata = function () {
        return find($scope.systemMetadata, {noData: false}) !== undefined;
    };

    $scope.getUUID = function () {
        if ($scope.system.machine_id) {
            return $scope.system.machine_id; // for legacy
        }

        return $scope.system.system_id;
    };

    $scope.networkSorter = function (value) {
        return parseInt(value.port);
    };
}

function systemMetadata() {
    return {
        templateUrl: 'js/components/systemMetadata/systemMetadata.html',
        restrict: 'E',
        controller: systemMetadataCtrl,
        scope: {
            system: '='
        }
    };
}

componentsModule.directive('systemMetadata', systemMetadata);
