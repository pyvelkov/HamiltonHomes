var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("realtors.db");

// select all the realtors, call the callback with them as a parameter
function getAllRealtors(callback) {
	db.all("SELECT rowid, * FROM Realtors", function (err, results) {
		callback(results);
	});
}

// delete a realtor with a given id
function deleteRealtor(id, callback) {
	db.run("DELETE FROM Realtors WHERE rowid=?", id, function (err) {
		callback();
	});
}

// insert an realtor into the table
function addRealtor(realtor, callback) {
	db.run(
		"INSERT INTO Realtors VALUES (?,?,?,?)",
		[
			realtor.firstname,
			realtor.lastname,
			realtor.specialties,
			realtor.likes,
		],
		function (err) {
			callback();
		}
	);
}

// update an realtor with a given id
function updateRealtor(realtor, id, callback) {
	db.run(
		"UPDATE Realtors SET firstname=?,lastname=?,specialties=?,likes=? WHERE rowid=?",
		[
			realtor.firstname,
			realtor.lastname,
			realtor.specialties,
			realtor.likes,
			id,
		],
		function (err) {
			callback();
		}
	);
}

//MY CODE==================================================
function sortRealtorIDAsc(callback) {
	db.all(
		"SELECT rowid, * FROM Realtors ORDER BY rowid ASC",
		function (err, results) {
			callback(results);
		}
	);
}

function sortRealtorIDDesc(callback) {
	db.all(
		"SELECT rowid, * FROM Realtors ORDER BY rowid DESC",
		function (err, results) {
			callback(results);
		}
	);
}

function sortRealtorFNameAsc(callback) {
	db.all(
		"SELECT rowid, * FROM Realtors ORDER BY firstname ASC",
		function (err, results) {
			callback(results);
		}
	);
}

function sortRealtorFNameDesc(callback) {
	db.all(
		"SELECT rowid, * FROM Realtors ORDER BY firstname DESC",
		function (err, results) {
			callback(results);
		}
	);
}
function sortRealtorLNameAsc(callback) {
	db.all(
		"SELECT rowid, * FROM Realtors ORDER BY lastname ASC",
		function (err, results) {
			callback(results);
		}
	);
}

function sortRealtorLNameDesc(callback) {
	db.all(
		"SELECT rowid, * FROM Realtors ORDER BY lastname DESC",
		function (err, results) {
			callback(results);
		}
	);
}

function sortRealtorSpecialtiesAsc(callback) {
	db.all(
		"SELECT rowid, * FROM Realtors ORDER BY specialties ASC",
		function (err, results) {
			callback(results);
		}
	);
}

function sortRealtorSpecialtiesDesc(callback) {
	db.all(
		"SELECT rowid, * FROM Realtors ORDER BY specialties DESC",
		function (err, results) {
			callback(results);
		}
	);
}

function updateRealtorLike(id, callback) {
	db.run(
		"UPDATE Realtors SET likes = likes + 1 WHERE rowid=?",
		[id],
		function (err) {
			callback();
		}
	);
}

function layoffRealtor(callback) {
	db.run("DELETE FROM Realtors WHERE likes < 2", function (err) {
		callback();
	});
}

function random(callback) {
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

	function generateString(length) {
		let result = " ";
		let charactersLength = characters.length;
		for (let i = 0; i < length; i++) {
			result += characters.charAt(
				Math.floor(Math.random() * charactersLength)
			);
		}

		return result;
	}

	let firstname = generateString(5);
	let lastname = generateString(7);
	let specialties = generateString(3);
	let likes = Math.floor(Math.random() * 11);

	db.run(
		"INSERT INTO Realtors VALUES (?,?,?,?)",
		[firstname, lastname, specialties, likes],
		function (err) {
			callback();
		}
	);
}

// export the functions we have defined
module.exports = {
	getAllRealtors,
	deleteRealtor,
	addRealtor,
	updateRealtor,
	sortRealtorIDAsc,
	sortRealtorIDDesc,
	sortRealtorFNameAsc,
	sortRealtorFNameDesc,
	sortRealtorLNameAsc,
	sortRealtorLNameDesc,
	sortRealtorSpecialtiesAsc,
	sortRealtorSpecialtiesDesc,
	updateRealtorLike,
	layoffRealtor,
	random,
};
