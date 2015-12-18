var apiKey = "b8df41e2f08c3325"
var latitude = undefined;
var longitude = undefined;
var i =0;

// Get their location.
var options = {
  //enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

// When the page is rendered, grab location.
// Make sure you load jQuery in your html doc FIRST!!
jQuery(document).ready(function($) {
 navigator.geolocation.getCurrentPosition(success, error, options);
  console.log("http://api.wunderground.com/api/b8df41e2f08c3325/geolookup/conditions/q/"+latitude + "," +longitude + ".json");
});

//On successful browser location, get weather and update div.
function success(pos) {
  crd = pos.coords;
  longitude = crd.longitude;
  // crd.accuracy
  latitude = crd.latitude;i
  $.ajax({
      //url:"http://api.wunderground.com/api/b8df41e2f08c3325/geolookup/conditions/q/France/Paris.json",
       url: "http://api.wunderground.com/api/b8df41e2f08c3325/geolookup/conditions/q/"+latitude + "," +longitude + ".json",
     //  url: "http://api.wunderground.com/api/b8df41e2f08c3325/geolookup/conditions/q/47.5311399,-122.029461-122.029461.json",
     dataType: "jsonp",
     success: function(parsed_json) {
       console.log(parsed_json)
       var location = parsed_json['location']['city'];
       var temp_f = parsed_json['current_observation']['temp_f'];
       document.getElementById('weather').innerHTML = ("Current temperature in " + location + " is: " + temp_f);
     }
   });
  console.log("geolocations successful", latitude, longitude);
};

// If something goes wrong getting weather.
function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};


// In case I need to take a nap.
function sleepFor( sleepDuration ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
}


