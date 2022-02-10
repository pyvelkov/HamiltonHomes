const hospitals = {
	type: "FeatureCollection",
	name: "Hospitals",
	crs: {
		type: "name",
		properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" },
	},
	features: [
		{
			type: "Feature",
			properties: {
				OBJECTID: 1,
				NAME: "Juravinski Cancer Centre",
				ADDRESS: "699 Concession Street",
				COMMUNITY: "Hamilton",
				TYPE: null,
				LONGITUDE: "-79.84659072801017",
				LATITUDE: "43.24010159219824",
			},
			geometry: {
				type: "Point",
				coordinates: [-79.846590728010099, 43.240101591261762],
			},
		},
		{
			type: "Feature",
			properties: {
				OBJECTID: 2,
				NAME: "Chedoke Hospital",
				ADDRESS: "565 Sanatorium Road",
				COMMUNITY: "Hamilton",
				TYPE: null,
				LONGITUDE: "-79.91710597305843",
				LATITUDE: "43.238557763378495",
			},
			geometry: {
				type: "Point",
				coordinates: [-79.917105973058327, 43.238557762441978],
			},
		},
		{
			type: "Feature",
			properties: {
				OBJECTID: 3,
				NAME: "Hamilton General Hospital",
				ADDRESS: "237 Barton Street East",
				COMMUNITY: "Hamilton",
				TYPE: null,
				LONGITUDE: "-79.85433493263169",
				LATITUDE: "43.26194349249136",
			},
			geometry: {
				type: "Point",
				coordinates: [-79.854334932631616, 43.261943491554838],
			},
		},
		{
			type: "Feature",
			properties: {
				OBJECTID: 4,
				NAME: "Juravinski Hospital",
				ADDRESS: "711 Concession Street",
				COMMUNITY: "Hamilton",
				TYPE: null,
				LONGITUDE: "-79.84500134029395",
				LATITUDE: "43.24013057720681",
			},
			geometry: {
				type: "Point",
				coordinates: [-79.845001340293862, 43.240130576270317],
			},
		},
		{
			type: "Feature",
			properties: {
				OBJECTID: 5,
				NAME: "McMaster University Medical Centre",
				ADDRESS: "1200 Main Street West",
				COMMUNITY: "Hamilton",
				TYPE: null,
				LONGITUDE: "-79.9176322156679",
				LATITUDE: "43.2596154898273",
			},
			geometry: {
				type: "Point",
				coordinates: [-79.917632215667808, 43.259615488890752],
			},
		},
		{
			type: "Feature",
			properties: {
				OBJECTID: 6,
				NAME: "St. Joseph's Hospital - Charlton Campus",
				ADDRESS: "50 Charlton Avenue East",
				COMMUNITY: "Hamilton",
				TYPE: null,
				LONGITUDE: "-79.87091912976558",
				LATITUDE: "43.24860153779506",
			},
			geometry: {
				type: "Point",
				coordinates: [-79.870919129765497, 43.248601536858544],
			},
		},
		{
			type: "Feature",
			properties: {
				OBJECTID: 7,
				NAME: "St. Peter's Hospital",
				ADDRESS: "88 Maplewood Avenue",
				COMMUNITY: "Hamilton",
				TYPE: "Chronic Care",
				LONGITUDE: "-79.83687057239422",
				LATITUDE: "43.2447575877267",
			},
			geometry: {
				type: "Point",
				coordinates: [-79.836870572394147, 43.244757586790207],
			},
		},
		{
			type: "Feature",
			properties: {
				OBJECTID: 8,
				NAME: "St. Joseph's Centre for Mountain Health Services - West 5th Campus",
				ADDRESS: "100 West 5th Street",
				COMMUNITY: "Hamilton",
				TYPE: "Psychiatric",
				LONGITUDE: "-79.8831178614224",
				LATITUDE: "43.24233704460304",
			},
			geometry: {
				type: "Point",
				coordinates: [-79.883117861422306, 43.242337043666531],
			},
		},
		{
			type: "Feature",
			properties: {
				OBJECTID: 9,
				NAME: "St. Joseph's Hospital - Urgent Care at King Campus",
				ADDRESS: "2757 King Street East",
				COMMUNITY: "Hamilton",
				TYPE: "Urgent Care",
				LONGITUDE: "-79.77384804381661",
				LATITUDE: "43.22172294601865",
			},
			geometry: {
				type: "Point",
				coordinates: [-79.773848043816528, 43.221722945082213],
			},
		},
	],
};
