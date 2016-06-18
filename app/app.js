angular.module('portfolioApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/');

$stateProvider
.state('home', {
  url: '/',
  templateUrl: './app/home/homeView.html'
})

.state('projects', {
  url: '/projects/',
  templateUrl: './app/projects/projectsView.html'
})


.state('bio', {
  url: '/bio/',
  templateUrl: './app/bio/bioView.html'
})

})
