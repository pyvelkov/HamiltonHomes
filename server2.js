let express = require("express");
let app = express();
let sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database("properties.db");

app.use(express.json());

app.get("/api", function (req, res) {
	db.all("SELECT rowid, * FROM Properties", function (err, results) {
		res.json(results);
	});
});

app.get("/api/:id", function (req, res) {
	db.all(
		`SELECT rowid, * FROM Properties WHERE rowid=?`,
		req.params.id,
		function (err, results) {
			res.json(results);
		}
	);
});

app.put("/api", function (req, res) {
	db.run(`DELETE FROM Properties`);

	for (let i = 0; i < req.body.length; i++) {
		db.run("INSERT INTO Properties VALUES (?,?,?,?,?,?,?,?,?,?)", [
			req.body[i].address,
			req.body[i].postal_code,
			req.body[i].city,
			req.body[i].community,
			req.body[i].province,
			req.body[i].price,
			req.body[i].bedrooms,
			req.body[i].bathrooms,
			req.body[i].img,
			req.body[i].description,
		]);
	}
	res.json({ response: "COLLECTION UPDATED" });
});

app.put("/api/:id", function (req, res) {
	db.run(
		"UPDATE Properties SET address=(?),postal_code=(?),city=(?),community=(?),province=(?),price=(?),bedrooms=(?),bathrooms=(?),img=(?),description=(?) WHERE rowid=?",
		[
			req.body.address,
			req.body.postal_code,
			req.body.city,
			req.body.community,
			req.body.province,
			req.body.price,
			req.body.bedrooms,
			req.body.bathrooms,
			req.body.img,
			req.body.description,
			req.params.id,
		]
	);

	res.json({ response: "ITEM UPDATED" });
});

app.delete("/api", function (req, res) {
	db.run("DELETE FROM Properties");
	res.json({ response: "COLLECTION DELETED" });
});

app.delete("/api/:id", function (req, res) {
	db.run("DELETE FROM Properties WHERE rowid=?", req.params.id);
	res.json({ response: "ITEM DELETED" });
});

app.post("/api", function (req, res) {
	db.run("INSERT INTO Properties VALUES (?,?,?,?,?,?,?,?,?,?)", [
		req.body.address,
		req.body.postal_code,
		req.body.city,
		req.body.community,
		req.body.province,
		req.body.price,
		req.body.bedrooms,
		req.body.bathrooms,
		req.body.img,
		req.body.description,
	]);

	res.json({ response: "ITEM INSERTED" });
});

app.listen(8081, function () {
	console.log(`server listening on port 8081...`);
});
