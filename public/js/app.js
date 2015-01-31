// Firebase connection
// var myDataRef = new Firebase('https://glaring-torch-5894.firebaseio.com/');
$(document).ready(function(){
//   jQuery.getJSON("https://glaring-torch-5894.firebaseio.com/.json", function(json){
//     console.log(json);
//   });

//   $('.login').click(function(){
//     twitterAuthentication();
//   });

});

function twitterAuthentication() {
  myDataRef.authWithOAuthPopup("twitter", function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
    }
  });
}

var myApp = angular.module("myApp", ["firebase"]);

myApp.controller("SampleCtrl", function($scope, $firebase) {

  var ref = new Firebase("https://glaring-torch-5894.firebaseio.com/");
  var sync = $firebase(ref);

  // download the data into a local object
  var syncObject = sync.$asObject();

  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, "data");
});

myApp.controller('ViewJob', ['$scope', '$http', '$firebase', function ($scope, $http, $firebase) {

  $http({
    method: 'GET',
    url: 'https://glaring-torch-5894.firebaseio.com/jobs.json'
  })

  .success(function (data, status) {
    $scope.text = data;
  });

}]);

myApp.controller('JobRoles',function($scope){
   $scope.items = ['Design','Development','Marketing','Customer Service']
});

myApp.controller("AddJob", function($scope, $firebase) {
  var ref = new Firebase("https://glaring-torch-5894.firebaseio.com/jobs");
  var jobTitle = $('#title');
  var jobLocation = $('#location');
  var jobDescription = $('#description');
  var job_type = $('#job_type');
  $('#addJobBtn').click(function() {
    ref.push({job_role: jobTitle.val(), description: jobDescription.val(), location: jobLocation.val(), job_type: job_type.val() });
  })
})
