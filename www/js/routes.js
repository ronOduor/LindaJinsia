angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


    .state('tabsController', {
      url: '/page1',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })

    .state('tabsController.getInformation', {
      url: '/get_info',
      views: {
        'tab2': {
          templateUrl: 'templates/getInformation.html',
          controller: 'getInformationCtrl'
        }
      }
    })

    .state('tabsController.getLocations', {
      url: '/get_locations',
      views: {
        'tab3': {
          templateUrl: 'templates/getLocations.html',
          controller: 'getLocationsCtrl'
        }
      }
    })


    .state('tabsController.lindaJinsia', {
      url: '/home',
      views: {
        'tab1': {
          templateUrl: 'templates/lindaJinsia.html',
          controller: 'lindaJinsiaCtrl'
        }
      }
    })





    .state('tabsController.category', {
      url: '/category',
      views: {
        'tab1': {
          templateUrl: 'templates/category.html',
          controller: 'categoryCtrl'
        }
      }
    })





    .state('tabsController.victimDetails', {
      url: '/vic_details',
      views: {
        'tab1': {
          templateUrl: 'templates/victimDetails.html',
          controller: 'victimDetailsCtrl'
        }
      }
    })





    .state('tabsController.witnessDetails', {
      url: '/witness',
      views: {
        'tab1': {
          templateUrl: 'templates/witnessDetails.html',
          controller: 'witnessDetailsCtrl'
        }
      }
    })





    .state('tabsController.caseType', {
      url: '/case_type',
      views: {
        'tab1': {
          templateUrl: 'templates/caseType.html',
          controller: 'caseTypeCtrl'
        }
      }
    })





    .state('tabsController.perpetrator', {
      url: '/perp',
      views: {
        'tab1': {
          templateUrl: 'templates/perpetrator.html',
          controller: 'perpetratorCtrl'
        }
      }
    })





    .state('tabsController.perpdetails', {
      url: '/perpdetails',
      views: {
        'tab1': {
          templateUrl: 'templates/perpdetails.html',
          controller: 'perpdetailsCtrl'
        }
      }
    })





    .state('tabsController.photo', {
      url: '/photo',
      views: {
        'tab1': {
          templateUrl: 'templates/photo.html',
          controller: 'photoCtrl'
        }
      }
    })





    .state('tabsController.giveLocation', {
      url: '/give_location',
      views: {
        'tab1': {
          templateUrl: 'templates/giveLocation.html',
          controller: 'giveLocationCtrl'
        }
      }
    })

    .state('tabsController.definitions', {
      url: '/definitions',
      views: {
        'tab2': {
          templateUrl: 'templates/definitions.html',
          controller: 'definitionsCtrl'
        }
      }
    })

    .state('tabsController.gbvforms', {
      url: '/forms',
      views: {
        'tab2': {
          templateUrl: 'templates/gbvforms.html',
          controller: 'gbvformsCtrl'
        }
      }
    })

    .state('tabsController.steps', {
      url: '/steps',
      views: {
        'tab2': {
          templateUrl: 'templates/steps.html',
          controller: 'stepsCtrl'
        }
      }
    })

    .state('tabsController.contacts', {
      url: '/contacts',
      views: {
        'tab2': {
          templateUrl: 'templates/contacts.html',
          controller: 'contactsCtrl'
        }
      }
    })

    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1/home');

});
