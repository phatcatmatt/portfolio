angular.module('portfolioApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/');

$stateProvider
.state('home', {
  url: '/',
  templateUrl: './app/home/homeView.html'
})

.state('portfolio', {
  url: '/portfolio',
  templateUrl: './app/portfolio/portfolioView.html'
})

.state('portfolio.twuftly', {
  url: '/twuftly',
  templateUrl: './app/portfolio/twuftlyView.html'
})

.state('portfolio.dev-housing', {
  url: '/dev-housing',
  templateUrl: './app/portfolio/devHousingView.html'
})


// .state('bio', {
//   url: '/bio/',
//   templateUrl: './app/bio/bioView.html'
// })

})
