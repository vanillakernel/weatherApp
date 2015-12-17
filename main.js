var apiKey = "b8df41e2f08c3325"
var latitude = 0;
var longitude = 0;
// Get their location.
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  crd = pos.coords;
  longitude = crd.longitude;
  // crd.accuracy
  latitude = crd.latitude;
};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, options);

// Make sure you load jQuery in your html doc FIRST!!
jQuery(document).ready(function($) {
  $.ajax({
    url: "http://api.wunderground.com/api/b8df41e2f08c3325/geolookup/conditions/q/IA/Cedar_Rapids.json",
    dataType: "jsonp",
    success: function(parsed_json) {
      var location = parsed_json['location']['city'];
      var temp_f = parsed_json['current_observation']['temp_f'];
      document.getElementById('weather').innerHTML = ("Current temperature in " + longitude + location + " is: " + temp_f);
    }
  });

});