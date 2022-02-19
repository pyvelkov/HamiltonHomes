$(document).ready(function () {
	$.get({
		url: "http://localhost:3000/all",
		success: populate,
		dataType: "json",
	});

	function populate(response) {
		let newTableRow = "<tr>";
		for (let i = 0; i < response.length; i++) {
			newTableRow += "<td>" + response[i].address + "</td>";
			newTableRow += "<td>" + response[i].postal_code + "</td>";
			newTableRow += "<td>" + response[i].city + "</td>";
			newTableRow += "<td>" + response[i].community + "</td>";
			newTableRow += "<td>" + response[i].province + "</td>";
			newTableRow += "<td>" + response[i].price + "</td>";
			newTableRow += "<td>" + response[i].bedrooms + "</td>";
			newTableRow += "<td>" + response[i].bathrooms + "</td>";
			newTableRow +=
				'<td><img src="' +
				response[i].img +
				'" width="100" height="100">' +
				"</td>";
			newTableRow += "<td>" + response[i].description + "</td>";
			newTableRow += "</tr>";
		}
		$("#houseData").html(newTableRow);
	}

	$("#all").click(function () {
		$.get({
			url: "http://localhost:3000/all",
			success: populate,
			dataType: "json",
		});
	});

	$("#mountain").click(function () {
		$.get({
			data: { community: "Mountain" },
			url: "http://localhost:3000/community_search",
			success: populate,
			dataType: "json",
		});
	});

	$("#ancaster").click(function () {
		$.get({
			data: { community: "Ancaster" },
			url: "http://localhost:3000/community_search",
			success: populate,
			dataType: "json",
		});
	});

	$("#stoneyCreek").click(function () {
		$.get({
			data: { community: "Stoney Creek" },
			url: "http://localhost:3000/community_search",
			success: populate,
			dataType: "json",
		});
	});

	$("#dundas").click(function () {
		$.get({
			data: { community: "Dundas" },
			url: "http://localhost:3000/community_search",
			success: populate,
			dataType: "json",
		});
	});

	$("#waterdown").click(function () {
		$.get({
			data: { community: "Waterdown" },
			url: "http://localhost:3000/community_search",
			success: populate,
			dataType: "json",
		});
	});

	$("#bedroomList li a").click(function () {
		let filterNumber = $(this).parent().text();
		$("#bedroomFilterButton").click(function () {
			$.get({
				data: { bedrooms: filterNumber },
				url: "http://localhost:3000/bed_search",
				success: populate,
				dataType: "json",
			});
		});
	});

	$("#bathroomList li a").click(function () {
		let filterNumber = $(this).parent().text();
		$("#bathroomFilterButton").click(function () {
			$.get({
				data: { bathrooms: filterNumber },
				url: "http://localhost:3000/bathroom_search",
				success: populate,
				dataType: "json",
			});
		});
	});

	$("#priceFilterButton").click(function () {
		let minPrice = $("#minPrice").val();
		let maxPrice = $("#maxPrice").val();
		$.get({
			data: { min: minPrice, max: maxPrice },
			url: "http://localhost:3000/price_search",
			success: populate,
			dataType: "json",
		});
	});
});
