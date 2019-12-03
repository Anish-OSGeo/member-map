// Setup Leaflet map. Set view to ([0, 0], 1) to be at maximum zoom and in center.
var mymap = L.map('mapid').setView([0, 0], 1);

// Setup mapping layer. I have used Mapbox streets v11.
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox/streets-v11',
	accessToken: 'pk.eyJ1IjoiYW5pc2hhZ25pIiwiYSI6ImNrM3EydjI4dTA5bjUzbHJ2ZmQ0cGV1MGcifQ.kiQ0Xx7i5WTIS7aBvShpCg'
}).addTo(mymap);

// I have uploaded the locations.json file to myjson for temporary hosting.
$.getJSON("https://api.myjson.com/bins/dwq9o", function(json) {
	// I loop through each of the locations in the returned json.
	for (i = 0; i < json.length; i++) {
		// I split the returned coordinate string and retrieve the longitudinal value.
		var long = json[i].coordinate.substr(0, json[i].coordinate.indexOf(',')); 
		// I split the returned coordiante string and receive the latitudinal value.
		var lat = json[i].coordinate.split(',')[1];
		// There are certain latitundinal strings retrieved from the Wiki that begin with a space. This breaks Leaflet, and as such spaces have to be removed.
		if (lat.startsWith(" ")) {
			// Remove spaces from beginning of latitudinal values.
			lat = lat.substr(1);
		}
		// Generate marker from each of the lat/long values and add it to the Leaflet map.
		var marker = L.marker([lat, long]).addTo(mymap);
		// Bind a popup that contains institution name to the marker in bold.
		marker.bindPopup("<b>" + json[i].location + "</b>")
	}
});
