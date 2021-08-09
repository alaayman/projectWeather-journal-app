/* Global Variables */
// api url using city id to implement if there is time before the deadline
const WeatherBaseUrlId = "https://api.openweathermap.org/data/2.5/weather?id=";
// api url using zip code
const WeatherBaseUrlZip =
  "https://api.openweathermap.org/data/2.5/weather?zip=";
const metricUnits = "&units=metric"; // to return metric units
const apiKeyString = "&appid=06c3a30d901f40f341d5ac8c6a039672";
// var newData = {};

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();

// getting document elements
const zipCodeEntry = document.getElementById("zip");
const feelingEntry = document.getElementById("feelings");
const dateDisplay = document.getElementById("date");
const tempDisplay = document.getElementById("temp");
const contentDisplay = document.getElementById("content");
const feelingsDisplay = document.getElementById("displayFeelings");
const generateBtn = document
  .getElementById("generate")
  .addEventListener("click", getWeatherData); // event listener to call main function

// callback function to get data from weather api and send to server get back from server to update ui
function getWeatherData() {
  let zipCode = zipCodeEntry.value;
  const zipUrl = WeatherBaseUrlZip + zipCode + metricUnits + apiKeyString;
  //console.log("the entered url " + zipUrl);

  // check if user entered zip code and if it is a number
  if (zipCode == "" || isNaN(zipCode))
    return alert("Error - no zip code entered");

  getData(zipUrl)
    .then(function (newData) {
      postDataToServer("/addData", newData);
    })
    .then(function () {
      updateUi();
    });
}

// function to get data from openWeather api
const getData = async (url = "") => {
  const res = await fetch(url);
  try {
    if (!res.ok) return alert("zip code not found");
    const newData = await res.json();
    //console.log("in get "); // to watch values
    //console.log(newData); // to watch values
    return newData;
  } catch (error) {
    console.log(error);
  }
};

const postDataToServer = async (url = "", data = {}) => {
  let feelings = feelingEntry.value;
  //console.log(feelings);
  data["feelings"] = feelings; // adding user felling value to data object
  const res = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await res.json();
    //console.log(newData);
    return newData;
  } catch (error) {
    console.log(error);
  }
};

const updateUi = async () => {
  const res = await fetch("/getData");
  try {
    const finalData = await res.json();

    const weatherIconUrl =
      "https://openweathermap.org/img/wn/" +
      finalData.weather[0].icon +
      "@2x.png";

    dateDisplay.innerHTML = newDate;
    tempDisplay.innerHTML =
      finalData.main.temp + String.fromCharCode(176) + "C";
    contentDisplay.innerHTML = finalData.weather[0].description;
    document.getElementById("name").innerHTML = finalData.name;
    feelingsDisplay.innerHTML = finalData.feelings;
    document.getElementById("iconImage").src = weatherIconUrl;
  } catch (error) {
    console.log(error);
  }
};
