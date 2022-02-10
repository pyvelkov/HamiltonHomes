var markers = [];

function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: 43.2528614, lng: -79.8313309 },
		zoom: 14,
	});

	const marker = new google.maps.Marker({
		position: { lat: 43.2528614, lng: -79.8313309 },
		map: map,
	});
}

// let originAddress = document.getElementById("originAddress");
// originAddress.addEventListener("click", function () {
// 	originAddress_marker = new google.maps.Marker({
// 		position: { lat: 43.2609, lng: -79.9192 },
// 		map: map,
// 	});
// });

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
		fillColor: "blue",
		fillOpacity: 0.6,
		strokeWeight: 0,
		rotation: 0,
		scale: 2,
	};

	function foundPosition(position) {
		console.log(position);

		geoLocation_marker = new google.maps.Marker({
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

		geoLocation_marker.addListener("click", function () {
			geoMarkerInfo.open({
				anchor: geoLocation_marker,
				shouldFocus: false,
			});
		});
		console.log(position.coords.latitude);
	}

	function geolocate() {
		navigator.geolocation.getCurrentPosition(foundPosition, showError);
	}

	const infowindow = google.maps.InfoWindow();
	marker_clicked = function () {
		infowindow.close();
		infowindow.setContent(this.NAME);
		infowindow.open(map, this);
	};

	function schoolMark() {
		for (let i = 0; i < schools.features.length; i++) {
			new_marker = new google.maps.Marker({
				position: {
					lat: parseFloat(schools.features[i].properties.LATITUDE),
					lng: parseFloat(schools.features[i].properties.LONGITUDE),
				},
				title: schools.features[i].properties.NAME,
			});

			new_marker.setMap(map);

			new_marker.NAME = schools.features[i].properties.NAME;
			new_marker.CATEGORY = schools.features[i].properties.CATEGORY;
			new_marker.addListener("click", marker_clicked);

			markers.push(new_marker);
		}
	}

	$("#geoLocate").click(geolocate);
	$("#schoolMark").click(schoolMark);
});
