//MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

weatherApp.config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'https://api.openweathermap.org/**'
    ]);
});

weatherApp.config(['$locationProvider', function($locationProvider){
    $locationProvider.hashPrefix('');
}]);
