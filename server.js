// Setup empty JS object to act as endpoint for all routes
let projectData = {};

/*  to be implemented if there is time 
and find a way to save it to a database or a json file for future retrievals
 */
let historyData = []; // to be used for getting last 3 entries fetched

// Require Express to run server and routes
const express = require("express");
// Start up an instance of app
const app = express();
/* Middleware*/
const cors = require("cors");
const bodyParser = require("body-parser");
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
const port = 5000;
app.listen(port, () => {
  console.log("server is listening at localhost:" + port);
});

// get route for retrieving data from server
app.get("/getData", (req, res) => {
  res.send(projectData);
  console.log("data sent");
});

// post route to add data to projectData
app.post("/addData", (req, res) => {
  projectData = req.body;
  historyData.unshift(projectData);
  //console.log(projectData);
  //console.log(historyData);
  console.log('feeling is : '+projectData.feelings);
});
