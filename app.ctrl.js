// include express
const express = require("express");
const { render } = require("express/lib/response");
const app = express();

// include the mustache template engine for express
const mustacheExpress = require("mustache-express");

// include the model so the controller can use its functions
const Model = require("./app.model.js");

// registers the mustache engine with express
app.engine("mustache", mustacheExpress());

// sets mustache to be the view engine
app.set("view engine", "mustache");

// sets /views to be the /views folder
// files should have the extension filename.mustache
app.set("views", __dirname + "/views");

// ************************* CONTROLLER ACTIONS ****************************

// delete a realtor action (given an id parameter)
app.get("/delete/:id", function (req, res) {
	// 3. render the page with the realtor data
	function renderPage(realtorArray) {
		res.render("main_page", { realtors: realtorArray });
	}

	// 2. Get all the realtors, then render the page
	function getRealtors() {
		Model.getAllRealtors(renderPage);
	}

	// 1. delete the realtor first, then get all the realtors
	Model.deleteRealtor(req.params.id, getRealtors);
});

// addform action puts the add realtor form on the page
app.get("/addform", function (req, res) {
	// 2. render the page with the realtor data AND display the add form
	function renderPage(realtorArray) {
		res.render("main_page", { addrealtor: true, realtors: realtorArray });
	}

	// 1. get all the realtors, then render the page
	Model.getAllRealtors(renderPage);
});

// addrealtor action handles add form submit, inserts new realtor into table
app.get("/addrealtor", function (req, res) {
	// 3. render the page with the realtor data
	function renderPage(realtorArray) {
		res.render("main_page", {
			dispError: false,
			realtors: realtorArray,
		});
	}

	function renderErrors(realtorArray) {
		res.render("main_page", {
			dispError: true,
			fNameErr: !validFName,
			lNameErr: !validLName,
			specialtiesErr: !validSpecs,
			addrealtor: true,
			realtors: realtorArray,
			formdata: {
				firstname: req.query.firstname,
				lastname: req.query.lastname,
				specialties: req.query.specialties,
			},
		});
	}

	// 2. Get all the realtors, then render the page
	function getRealtors() {
		Model.getAllRealtors(renderPage);
	}

	function getRealtorsOnErr() {
		Model.getAllRealtors(renderErrors);
	}

	let validFName = false,
		validLName = false,
		validSpecs = false,
		validLikes = false,
		validation = false;
	// 1. Insert realtor into table using form data, then get all the realtors
	if (req.query.firstname != "") {
		validFName = true;
	}
	if (req.query.lastname != "") {
		validLName = true;
	}
	if (req.query.specialties != "") {
		validSpecs = true;
	}
	if (isNaN(req.query.likes) || req.query.likes != "") {
		validLikes = true;
	}

	if (
		validFName == true &&
		validLName == true &&
		validSpecs == true &&
		validLikes == true
	)
		validation = true;

	if (validation == true) Model.addRealtor(req.query, getRealtors);
	else getRealtorsOnErr();
});

// updateform action puts the update realtor form on the page
app.get("/updateform/:id", function (req, res) {
	// 2. render the page with the realtor data AND display update form
	function renderPage(realtorArray) {
		// filter the realtorArray for the realtor with the id parameter, that's
		// the realtor that we want to populate the form with (see: formdata)
		res.render("main_page", {
			updaterealtor: true,
			updateid: req.params.id,
			formdata: realtorArray.filter((x) => x.rowid == req.params.id)[0],
			realtors: realtorArray,
		});
	}

	// 1. get all the realtors, then render the page
	Model.getAllRealtors(renderPage);
});

// updaterealtor action handles updating the realtor in the database
app.get("/updaterealtor/:id", function (req, res) {
	// 3. render the page with the realtor data
	function renderPage(realtorArray) {
		res.render("main_page", { realtors: realtorArray });
	}

	function renderErrors(realtorArray) {
		res.render("main_page", {
			dispError: true,
			fNameErr: !validFName,
			lNameErr: !validLName,
			specialtiesErr: !validSpecs,
			updaterealtor: true,
			realtors: realtorArray,
			updateid: req.params.id,
			formdata: {
				firstname: req.query.firstname,
				lastname: req.query.lastname,
				specialties: req.query.specialties,
				likes: req.query.likes,
			},
		});
	}

	function getRealtorsOnErr() {
		Model.getAllRealtors(renderErrors);
	}

	// 2. Get all the realtors, then render the page
	function getRealtors() {
		Model.getAllRealtors(renderPage);
	}

	let validFName = false,
		validLName = false,
		validSpecs = false,
		validLikes = false,
		validation = false;
	// 1. Insert realtor into table using form data, then get all the realtors
	if (req.query.firstname != "") {
		validFName = true;
	}
	if (req.query.lastname != "") {
		validLName = true;
	}
	if (req.query.specialties != "") {
		validSpecs = true;
	}
	if (isNaN(req.query.likes) || req.query.likes != "") {
		validLikes = true;
	}

	if (
		validFName == true &&
		validLName == true &&
		validSpecs == true &&
		validLikes == true
	)
		validation = true;

	if (validation == true)
		Model.updateRealtor(req.query, req.params.id, getRealtors);
	else getRealtorsOnErr();

	// 1. update the realtor in the database, then get all the realtors
});

//MY CODE================================================================
//sort ID
app.get("/sortedByIDAsc", function (req, res) {
	function renderPage(realtorArray) {
		res.render("main_page", { realtors: realtorArray });
	}

	Model.sortRealtorIDAsc(renderPage);
});

app.get("/sortedByIDDesc", function (req, res) {
	function renderPage(realtorArray) {
		res.render("main_page", { realtors: realtorArray });
	}

	Model.sortRealtorIDDesc(renderPage);
});

//sort fname
app.get("/sortedByFNameAsc", function (req, res) {
	function renderPage(realtorArray) {
		res.render("main_page", { realtors: realtorArray });
	}

	Model.sortRealtorFNameAsc(renderPage);
});

app.get("/sortedByFNameDesc", function (req, res) {
	function renderPage(realtorArray) {
		res.render("main_page", { realtors: realtorArray });
	}

	Model.sortRealtorFNameDesc(renderPage);
});

//sort lname
app.get("/sortedByLNameAsc", function (req, res) {
	function renderPage(realtorArray) {
		res.render("main_page", { realtors: realtorArray });
	}

	Model.sortRealtorLNameAsc(renderPage);
});

app.get("/sortedByLNameDesc", function (req, res) {
	function renderPage(realtorArray) {
		res.render("main_page", { realtors: realtorArray });
	}

	Model.sortRealtorLNameDesc(renderPage);
});

//sort specialization
app.get("/sortedBySpecialtiesAsc", function (req, res) {
	function renderPage(realtorArray) {
		res.render("main_page", { realtors: realtorArray });
	}

	Model.sortRealtorSpecialtiesAsc(renderPage);
});

app.get("/sortedBySpecialtiesDesc", function (req, res) {
	function renderPage(realtorArray) {
		res.render("main_page", { realtors: realtorArray });
	}

	Model.sortRealtorSpecialtiesDesc(renderPage);
});

//likes feature
app.get("/like/:id", function (req, res) {
	function renderPage(realtorArray) {
		res.render("main_page", { realtors: realtorArray });
	}

	function getRealtors() {
		Model.getAllRealtors(renderPage);
	}

	Model.updateRealtorLike(req.params.id, getRealtors);
});

app.get("/layoff", function (req, res) {
	function renderPage(realtorArray) {
		res.render("main_page", {
			layoffrealtor: true,
			realtors: realtorArray,
		});
	}

	function getRealtors() {
		Model.getAllRealtors(renderPage);
	}

	Model.layoffRealtor(getRealtors);
});

app.get("/random", function (req, res) {
	function renderPage(realtorArray) {
		res.render("main_page", {
			layoffrealtor: true,
			realtors: realtorArray,
		});
	}

	function getRealtors() {
		Model.getAllRealtors(renderPage);
	}

	Model.random(getRealtors);
});

//========================================================================

// default action: render the page with realtor data
app.get("/", function (req, res) {
	// 2. render the page with the realtor data
	function renderPage(realtorArray) {
		res.render("main_page", { realtors: realtorArray });
	}

	// 1. get all the realtors, then render the page
	Model.getAllRealtors(renderPage);
});

// catch-all router case intended for static files
app.get(/^(.+)$/, function (req, res) {
	res.sendFile(__dirname + req.params[0]);
});

app.listen(8081, function () {
	console.log("server listening...");
});
