/* Global Variables */
const WeatherBaseUrlId = "http://api.openweathermap.org/data/2.5/weather?id="; // api url using city id
const WeatherBaseUrlZip = "http://api.openweathermap.org/data/2.5/weather?zip="; // api url using zip code
const metricUnits = "&units=metric"; // to return metric units
const apiKeyString = "&appid=06c3a30d901f40f341d5ac8c6a039672";
const data = {};

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();

// getting document elements
const zipCodeEntry = document.getElementById("zip");
const feelingEntry = document.getElementById("feelings");
const generateBtn = document
  .getElementById("generate")
  .addEventListener("click", getWeatherData);
const dateDisplay = document.getElementById("date");
const tempDisplay = document.getElementById("temp");
const contentDisplay = document.getElementById("content");

// function to get 'Getting' data from weather api
const postDataToSer = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log(error);
  }
};

function getWeatherData() {
  const zipCode = zipCodeEntry.value;
  const url = WeatherBaseUrlZip + zipCode + metricUnits + apiKeyString;
  getData(url);
}
// getting data from openWeather api
const getData = async (url = "") => {
  const res = await fetch(url);
  try {
    const newData = await res.json();
    console.log(newData);
    // to put on update ui *******************************************************
    dateDisplay.textContent = newDate;
    tempDisplay.textContent = newData.main.temp;
    contentDisplay.textContent = newData.name;
    document.getElementById("name").innerHTML = newData.weather[0].description;
    // ****************************************************************************
    return newData;
  } catch (error) {
    console.log(error);
  }
};
