angular.module('app.controllers', [])

.controller('lindaJinsiaCtrl', function($scope) {

})

.controller('categoryCtrl', function($scope) {

})

.controller('victimDetailsCtrl', function($scope) {

})

.controller('witnessDetailsCtrl', function($scope) {

})

.controller('caseTypeCtrl', function($scope) {

})

.controller('perpetratorCtrl', function($scope) {

})

.controller('perpdetailsCtrl', function($scope) {

})

.controller('photoCtrl', function($scope) {

})

  .controller('getInformationCtrl', function($scope) {

  })

  .controller('definitionsCtrl', function($scope) {

  })

  .controller('gbvformsCtrl', function($scope) {

  })

  .controller('contactsCtrl', function($scope) {

  })

  .controller('stepsCtrl', function($scope) {

  })

.controller('giveLocationCtrl', function($scope, $state, $cordovaGeolocation) {
    var options = {timeout: 10000, enableHighAccuracy: true}

    $cordovaGeolocation.getCurrentPosition(options).then(function(position){

      var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      var mapOptions = {
        center: latLng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };


      $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

      var marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: this.map.getCenter()
      });

      var content = "<h4>Information!</h4>";

      this.addInfoWindow(marker, content);

      var infoWindow = new google.maps.InfoWindow({
        content: content
      });

      google.maps.event.addListener(marker, 'click', function(){
        infoWindow.open(this.map, marker);
      });
    }, function(error){
      console.log("Could not get Location");
    });



})

  .controller('getLocationsCtrl', function($scope, $state, $cordovaGeolocation) {
    var options = {timeout: 10000, enableHighAccuracy: true}

    $cordovaGeolocation.getCurrentPosition(options).then(function(position){

      var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      var mapOptions = {
        center: latLng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };


      $scope.map = new google.maps.Map(document.getElementById("maps"), mapOptions);

      var marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: this.map.getCenter()
      });

      var content = "<h4>Information!</h4>";

      this.addInfoWindow(marker, content);

      var infoWindow = new google.maps.InfoWindow({
        content: content
      });

      google.maps.event.addListener(marker, 'click', function(){
        infoWindow.open(this.map, marker);
      });
    }, function(error){
      console.log("Could not get Location");
    });

  })
