# Weather-Journal App Project

## Table of Contents

- [Overview](#overview)
- [Instructions](#instructions)
- [Development](#development)
- [Deploying](#functionality)
- [Credits](#credits)

## Overview

This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI for a Weather-Journal App.

## Instructions

We produced the `server.js` and the `app.js` files, required to run the app. The `index.html` and the `style.css` files have been modified to style our application. This project uses HTML, CSS, Node JS with Express, GET and POST routes and the Fetch API amongst others.

## Development

Node JS and NPM need to be locally installed. You can check that by running `node -v && npm -v` in the terminal.

To install body-parser, express, cors and node-fetch use `npm install` + "package name".

On the `app.js` there are multiple functions for fetching weather data from OpenWeatherAPI, saving it through a post request and dynamically updating the UI.

The `server.js` contains two endpoints and requires
middleware to enable body-parser and cors.

## Deploying

Once `Node JS` and `Express` are installed, run the `server.js` file by initialising node;`node server.js` or `npm start`. This will run the app in a server environment under the port 5000.

The above action enables two endpoints. One is for getting  projectdata and the second for posting projectdata.

The app works with USA postcodes only. Just type your zip code and your feeling and click generate. That will return the weather, your mood and the date.

## Credits

Udacity



