var myApp = angular.module('myApp',['ui.router']);

myApp.controller('MyController', function MyController($scope) {   
    
});

//ui-router
myApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/frontpage");
  
  $stateProvider
        .state('frontpage', {
          url: "/frontpage",
          templateUrl: "partials/frontpage.html"
        })
    
      .state('about', {
      url: "/about",
      templateUrl: "partials/about.html"
    })
      
      .state('education', {
      url: "/education",
      templateUrl: "partials/education.html"
    }) 
      
      .state('portfolio', {
      url: "/portfolio",
      templateUrl: "partials/portfolio.html"
    })
      
      .state('contact', {
      url: "/contact",
      templateUrl: "partials/contact.html"
    })
    
    
});

