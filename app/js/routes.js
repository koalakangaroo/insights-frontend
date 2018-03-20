'use strict';

/**
 * @ngInject
 */
function Routes($stateProvider) {
    // PMaaS

    $stateProvider.state('app.dashboard-map', {
        url: '/dashboard/map/',
        templateUrl: 'js/states/pmaas/map/dashboardMap.html',
        controller: 'DashboardMapCtrl',
        title: 'Dashboard Map'
    });

    // Show a single Deployment
    $stateProvider.state('app.dashboard-deployment', {
        url: '/dashboard/deployments/:deployment_id',
        templateUrl: 'js/states/pmaas/deployments/deployments.html',
        controller: 'DeploymentsCtrl',
        title: 'Deployment'
    });

    $stateProvider.state('app.inventory-deployment', {
        url: '/inventory/deployments/:deployment_id',
        templateUrl: 'js/states/inventory-deployment/inventory-deployment.html',
        controller: 'InventoryDeploymentCtrl',
        title: 'Inventory',
        reloadOnSearch: false
    });

    $stateProvider.state('app.system-overview', {
        url: '/inventory/deployments/:deployment_id/systems/:id',
        templateUrl: 'js/states/system-overview/system-overview.html',
        controller: 'SystemOverviewCtrl',
        title: 'System Overview'
    });

    // PMaaS

    // Shared Routes
    // Actions routes
    $stateProvider
        .state('app.actions', {
            url: '/actions',
            templateUrl: 'js/states/actions/actions.html',
            controller: 'ActionsCtrl',
            params: {
                category: {
                    value: null,
                    squash: true
                }
            },
            title: 'Actions',
            actions: true
        })

        .state('app.actions-rule', {
            url: '/actions/:category/:rule',
            templateUrl: 'js/components/actions/actionsRule/actionsRule.html',
            controller: 'ActionsRuleCtrl',
            actions: true,
            title: 'Actions',
            triggerComplete: true
        })

        .state('app.topic', {
            url: '/actions/:id?product',
            templateUrl: 'js/states/topics/views/topic-list.html',
            controller: 'TopicRuleListCtrl',
            title: 'Actions',
            actions: true,
            params: {
                'filters:totalRisk': 'All'
            }
        });

    $stateProvider
        .state('app.list-policies', {
            url: '/policies/',
            templateUrl: 'js/states/policies/views/list-policies.html',
            controller: 'ListPoliciesCtrl',
            title: 'Policies'
        });

    $stateProvider
        .state('app.view-policy', {
            url: '/policies/:id',
            templateUrl: 'js/states/policies/views/view-policy.html',
            controller: 'ViewPolicyCtrl',
            title: 'Policies'
        });

    $stateProvider
        .state('app.components', {
            url: '/hidden/components/',
            templateUrl: 'js/states/hidden/components/components.html',
            controller: 'ComponentsCtrl',
            title: 'Components'
        });

    // Digest routes
    $stateProvider
        .state('app.digests', {
            url: '/reports/executive/',
            templateUrl: 'js/states/digests/digests.html',
            controller: 'DigestsCtrl',
            title: 'Executive Reports'
        });

    // Rule routes
    $stateProvider
        .state('app.rules', {
            // TODO once hash params are fixed elsewhere
            // stop using ?anchor
            url: '/rules?age&product&osp_deployment&docker_host&category' +
                '&ansibleSupport&incident&ruleStatus&impact&likelihood&totalRisk' +
                '&anchor&search_term',
            templateUrl: 'js/states/rules/list-rules.html',
            controller: 'ListRuleCtrl',
            title: 'Rules',
            hideGroup: true,
            reloadOnSearch: false
        });

    // Planner routes
    $stateProvider
        .state('app.maintenance', {
            // the parameter is optional and allows the maintenance view to be bookmarked
            // with "quick-edit" of a specific plan open
            url: '/planner/{maintenance_id}?tab&maintenanceCategory',
            templateUrl: 'js/states/maintenance/maintenance.html',
            controller: 'MaintenanceCtrl',
            title: 'Planner',
            reloadOnSearch: false,
            params: {
                newPlan: false
            }
        });

    // Common announcements routes
    $stateProvider
        .state('app.announcements', {
            url: '/announcements/',
            templateUrl: 'js/states/announcements/announcements.html',
            controller: 'ListAnnouncementCtrl',
            params: {
                announcementId: null
            }
        })

        .state('app.view-announcement', {
            url: '/announcements/:slug/',
            templateUrl: 'js/states/announcements/view-announcement.html',
            controller: 'ViewAnnouncementCtrl'
        });
}

module.exports = Routes;
