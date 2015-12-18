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
 
function sleepFor( sleepDuration ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
}


function sleepThenAct(){ sleepFor(2000); console.log(latitude,longitude); }

//console.log(latitude, longitude);
sleepThenAct();




// Make sure you load jQuery in your html doc FIRST!!
jQuery(document).ready(function($) {


  $.ajax({
      http://api.wunderground.com/api/b8df41e2f08c3325/geolookup/conditions/q/
      //url: "http://api.wunderground.com/api/b8df41e2f08c3325/geolookup/conditions/q/"+latitude + "," +longitude + ".json",
      //url: " http://api.wunderground.com/api/b8df41e2f08c3325/geolookup/conditions/q/47.5311399,-122.029461-122.029461.json",
    dataType: "jsonp",
    success: function(parsed_json) {
      var location = parsed_json['location']['city'];
      var temp_f = parsed_json['current_observation']['temp_f'];
      document.getElementById('weather').innerHTML = ("Current temperature in " + longitude+ " , "  + latitude + " is: " + temp_f);
    }
  });

});
