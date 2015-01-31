// Firebase connection
$(document).ready(function(){
  $('#addJobBtn').click(function(){
    var myDataRef = new Firebase('https://glaring-torch-5894.firebaseio.com/jobs');
    var title = $('#title').val();
    var location = $('#location').val();
    myDataRef.push({title: title, location: location});
  });

  $('.login').click(function(){
    twitterAuthentication();
  });

});

function twitterAuthentication() {
  ref.authWithOAuthPopup("twitter", function(error, authData) {
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
  .success(function (data, status, headers, config) {
    $scope.text = angular.fromJson(data);
    console.log(data);
  })

}]);

myApp.controller("AddJob", function($scope, $firebase) {
  var ref = new Firebase("https://glaring-torch-5894.firebaseio.com/");
  var jobTitle = $('#title');
  var jobLocation = $('#location');
  var jobDescription = $('#description');
  $('#addJobBtn').click(function() {
    ref.push({title: jobTitle.val(), location: jobLocation.val(), description: jobDescription.val()});
  })
})
