(function() {
    'use strict';
    console.log('Inside main-app.js');
    angular.module('MainApp', ['ngRoute', 'ngCookies', 'xeditable']).config(config).run(run);

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: 'home/home.html',
            controller: 'HomeController',
            controllerAs: 'vm'
        }).when('/login', {
            templateUrl: 'user/login.html',
            controller: 'UserController',
            controllerAs: 'vm'
        }).when('/register', {
            templateUrl: 'user/register.html',
            controller: 'UserController',
            controllerAs: 'vm'
        }).when('/manage-users', {
        	templateUrl: 'admin/manage-users.html',
        	controller: 'AdminController',
        	controllerAs: 'vm'
        }).when('/manage-blogs', {
        	templateUrl: 'admin/manage-blogs.html',
        	controller: 'AdminController',
        	controllerAs: 'vm'
        }).when('/manage-jobs', {
        	templateUrl: 'admin/manage-jobs.html',
        	controller: 'AdminController',
        	controllerAs: 'vm'
        }).when('/list-blogs', {
            templateUrl: 'blog/list-blogs.html',
            controller: 'BlogController',
            controllerAs: 'vm'
        }).when('/blog-details', {
            templateUrl: 'blog/blog-details.html',
            controller: 'BlogController',
            controllerAs: 'vm'
        }).when('/new-blog', {
            templateUrl: 'cp_blog/new-blog.html',
            controller: 'BlogController',
            controllerAs: 'vm'
        }).when('/list-events', {
            templateUrl: 'event/list-events.html',
            controller: 'EventController',
            controllerAs: 'vm'
        }).when('/event-details', {
            templateUrl: 'event/event-details.html',
            controller: 'EventController',
            controllerAs: 'vm'
        }).when('/new-event', {
            templateUrl: 'event/new-event.html',
            controller: 'EventController',
            controllerAs: 'vm'
        }).when('/chat', {
            templateUrl: 'chat/chat.html',
            controller: 'ChatController',
            controllerAs: 'vm'
        }).when('/list-jobs', {
            templateUrl: 'job/list-jobs.html',
            controller: 'JobController',
            controllerAs: 'vm'
        }).when('/list-applied-jobs', {
            templateUrl: 'job/list-applied-jobs.html',
            controller: 'JobController',
            controllerAs: 'vm'
        }).when('/job-details', {
            templateUrl: 'job//job-details.html',
            controller: 'JobController',
            controllerAs: 'vm'
        }).when('/new-job', {
            templateUrl: 'job/new-job.html',
            controller: 'JobController',
            controllerAs: 'vm'
        }).when('/apply-job', {
            templateUrl: 'job/apply-job.html',
            controller: 'JobController',
            controllerAs: 'vm'
        }).when('/list-friends', {
            templateUrl: 'friend/list-friends.html',
            controller: 'FriendController',
            controllerAs: 'vm'
        }).when('/find-friends', {
            templateUrl: 'friend/find-friends.html',
            controller: 'FriendController',
            controllerAs: 'vm'
        }).when('/view-friend-requests', {
            templateUrl: 'friend/view-friend-requests.html',
            controller: 'FriendController',
            controllerAs: 'vm'
        }).when('/private-chat', {
            templateUrl: 'private_chat/private-chat.html',
            controller: 'PrChatController',
            controllerAs: 'vm'
        }).otherwise({
            redirectTo: '/login'
        });
    }

    run.$inject = ['$rootScope', '$location', '$cookies', '$http', 'editableOptions'];
    function run($rootScope, $location, $cookies, $http, editableOptions) {
        console.log('Inside run()....');
        editableOptions.theme = 'bs3';
        $rootScope.$on('$locationChangeStart', function(event, next, current) {
            console.log('Inside run()::$on()....');
            var restrictedPage = $.inArray($location.path(), ['/login', '/register', '/list-blogs', '/blog-details', '/list-events', '/event-details', '/list-jobs', 'job-details']) === -1;
            var loggedIn = $rootScope.loggedInUser.username;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });

        $rootScope.loggedInUser = $cookies.getObject('loggedInUser') || {};
        if ($rootScope.loggedInUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.loggedInUser;
        }
    }
})();