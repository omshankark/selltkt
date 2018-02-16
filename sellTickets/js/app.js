const eventid = localStorage.getItem("eventid");
const eventdate = localStorage.getItem("eventdate");
const appVersion = localStorage.getItem("appVersion");

var app = angular.module('sellTickets', ['ngRoute', 'summary.ctrl', 'tickets.ctrl', 'transactions.ctrl']);

app.config(['$routeProvider', 'APIcallProvider', function ($routeProvider, APIcallProvider) {
    APIcallProvider.setDetails(eventid, eventdate, 'http://www.citypartytix.com/', appVersion);
    $routeProvider
    .when('/summary', {
        templateUrl: '../sellTickets/summary.html',
        controller: 'summary'
    })
    .when('/tickets', {
        templateUrl: '../sellTickets/tickets.html',
        controller: 'tickets'
    })
    .when('/transactions', {
        templateUrl: '../sellTickets/transactions.html',
        controller: 'transactions'
    })
    .otherwise({
        redirectTo: '/summary'
    });    
}]);
app.run(['$rootScope', '$location', function($rootScope, $location){
    $rootScope.PAGE_WHERE = 'summary';
    $rootScope.haveLoading = false;
    document.addEventListener("backbutton", onBackKeyDown, false);
    function onBackKeyDown(){
        alert($rootScope.PAGE_WHERE);
    }

    $rootScope.next = function(type){
        if($rootScope.PAGE_WHERE != type){    
            if('tickets' == type) {
                $rootScope.PAGE_WHERE = 'tickets';
                $location.path('/tickets');
            } else if('transactions' == type) {        
                $rootScope.PAGE_WHERE = 'transactions';
                $location.path('/transactions');     
            } else if('summary' == type){        
                $rootScope.PAGE_WHERE = 'summary';
                $location.path('/summary');    
            }
        }
    }
}]);
