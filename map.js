var markers = [];

function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: 43.2528614, lng: -79.8313309 },
		zoom: 14,
	});
	infowindow = new google.maps.InfoWindow();
	geoLocationMarker = new google.maps.Marker();
}

$(document).ready(function () {
	function showError() {
		const errorOut = document.getElementById("error");
		errorOut.innerHTML = "Error: Location could not be found";
		errorOut.classList.add("alert", "alert-danger");
		setTimeout(() => {
			errorOut.innerHTML = "";
			errorOut.classList.remove("alert", "alert-danger");
		}, 5000);
	}

	const geoMarker = {
		path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
		fillColor: "red",
		fillOpacity: 0.8,
		strokeWeight: 0,
		rotation: 0,
		scale: 2,
	};

	function foundPosition(position) {
		geoLocationMarker = new google.maps.Marker({
			position: {
				lat: position.coords.latitude,
				lng: position.coords.longitude,
			},
			icon: geoMarker,
			map: map,
		});

		geoMarkerInfo = new google.maps.InfoWindow({
			content: "Current Location <br/>",
		});

		geoLocationMarker.addListener("click", function () {
			geoMarkerInfo.open({
				anchor: geoLocationMarker,
				shouldFocus: false,
			});
		});
	}

	function geolocate() {
		navigator.geolocation.getCurrentPosition(foundPosition, showError);
	}

	marker_clicked = function () {
		infowindow.close();
		infowindow.setContent(this.NAME);
		infowindow.open(map, this);
	};

	function deleteMarkers(map) {
		for (let i = 0; i < markers.length; i++) {
			markers[i].setMap(map);
		}
		markers = [];
	}

	function addMarkers(markerType) {
		deleteMarkers(null);
		for (let i = 0; i < markerType.features.length; i++) {
			new_marker = new google.maps.Marker({
				position: {
					lat: parseFloat(markerType.features[i].properties.LATITUDE),
					lng: parseFloat(
						markerType.features[i].properties.LONGITUDE
					),
				},
				title: markerType.features[i].properties.NAME,
			});

			new_marker.setMap(map);

			new_marker.NAME = markerType.features[i].properties.NAME;
			new_marker.addListener("click", marker_clicked);

			markers.push(new_marker);
		}
	}

	function hospitalsMark() {
		addMarkers(hospitals);
	}

	function fireStationsMark() {
		addMarkers(fireStations);
	}

	function schoolMark() {
		addMarkers(schools);
	}

	function waterfallsMark() {
		addMarkers(waterFalls);
	}

	function clearMarkers() {
		deleteMarkers(null);
		geoLocationMarker.setMap(null);
	}

	$("#geoLocate").click(geolocate);
	$("#hospitalsMark").click(hospitalsMark);
	$("#fireStationsMark").click(fireStationsMark);
	$("#schoolMark").click(schoolMark);
	$("#waterfallsMark").click(waterfallsMark);
	$("#clearMarkers").click(clearMarkers);
});
