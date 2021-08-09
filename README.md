# Weather-Journal App Project

## Overview

This project is project 2 of udacity web development course with egyptian FWD initiative it requires creating an asynchronous web app that uses Web API and user data to dynamically update the UI.

## Languages used

- HTML
- CSS
- JavaScript
- node.js with Express

## How to use

1- Download the app
2- Install node.js you can download it from here <https://nodejs.org/en/download>
3- Use npm install from the app folder
4- Run node server.js
5- Open on your browser <http://localhost:5000>

## What i did

I installed node.js and express , cors, body-parser
Created server listening on port 5000
Prepared tow strings to get data by zip code as mentioned in rubric and by city id if there is time to deploy it
ps: not enough time had to implement zipcode only
Changed date to d/m/yyyy
Used fetch to get data from <https://openweathermap.org>
Added feelings to the data retrieved from openWeather and posted it to localserver at route /addData
Had a lot of trouble with .then() took me a while to understand how it works
Put all data from the post in projectData for the usage of more fields in the future
Only used city name , weather icon and description so far
Created a historyData array to put projectData in it for a history feature if time allowed ps:didn't implement it yet

## Credits

I used guidance and ideas from :
<https://udacity.com>
<https://developer.mozilla.org>
<https://www.w3schools.com/>
Used background image from <https://all-free-download.com/free-photos/> 

Special mention for (Node.js and Express.js - Full Course) by freeCodeCamp.org at youtube for a very good course on node.js and express
Watch it here <https://www.youtube.com/watch?v=Oe421EPjeBE&t=3242s>
And special mention for the glass look idea from (Build Glass Website with HTML and CSS Tutorial) by (Dev Ed) on youtube
Watch it here <https://www.youtube.com/watch?v=O7WbVj5apxU&t=679s>
