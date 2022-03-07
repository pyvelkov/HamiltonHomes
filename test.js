let axios = require("axios");

async function testDelete(id) {
	let response = await axios.delete("http://localhost:8081/api/" + id);
	console.log(JSON.stringify(response.data));
}
async function testPut() {
	let data = [
		{
			address: "fake addy",
			postal_code: "555 555",
			city: "Toronto",
			community: "North York",
			province: "Ontario",
			price: 123123123,
			bedrooms: 2,
			bathrooms: 2,
			img: "house1.jpg",
			description: "some overpriced pos.",
		},
		{
			address: "fake addy 2",
			postal_code: "666 666",
			city: "Toronto",
			community: "Downtown",
			province: "Ontario",
			price: 9999999,
			bedrooms: 10,
			bathrooms: 5,
			img: "house2.jpg",
			description: "Yet another overpriced pos with more rooms.",
		},
		{
			address: "fake addy 3",
			postal_code: "123 123",
			city: "Toronto",
			community: "Downtown",
			province: "Ontario",
			price: 123123123123123,
			bedrooms: 10,
			bathrooms: 5,
			img: "house3.jpg",
			description: "Yet another overpriced pos with more rooms.",
		},
		{
			address: "fake addy 4",
			postal_code: "124 125",
			city: "Toronto",
			community: "Downtown",
			province: "Ontario",
			price: 1010101,
			bedrooms: 10,
			bathrooms: 5,
			img: "house5.jpg",
			description: "Yet another overpriced pos with more rooms.",
		},
	];

	let response = await axios.put("http://localhost:8081/api", data);
	console.log(JSON.stringify(response.data));
}

async function testPutID(id) {
	let data = {
		address: "fake replacement",
		postal_code: "777 777",
		city: "Toronto",
		community: "North York",
		province: "Ontario",
		price: 12341234,
		bedrooms: 3,
		bathrooms: 3,
		img: "house3.jpg",
		description: "some overpriced pos YET AGAINNN.",
	};

	let response = await axios.put("http://localhost:8081/api/" + id, data);
	console.log(JSON.stringify(response.data));
}

async function testGet() {
	let response = await axios.get("http://localhost:8081/api");
	console.log(JSON.stringify(response.data));
}

async function main() {
	await testDelete(1);
	await testPut();
	await testPutID(1);
	await testPutID(2);
	await testPutID(3);
	await testGet();
}

main();
