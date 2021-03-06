angular.module('portfolioApp', ['ui.router', 'smoothScroll'])
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

.state('portfolio.dash-button', {
  url: '/dash-button',
  templateUrl: './app/portfolio/dashButtonView.html'
})


})
