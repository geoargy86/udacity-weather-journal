/* Global Variables */
const apiBaseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
let zip = '95124'
const country = 'us'
const appID = 'e54cf4e591002e5b2d11679b6c370ccf'

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

//register click event listner
document.getElementById('generate').addEventListener('click', generateOnClick);

function generateOnClick(e) {
  zip = document.getElementById('zip').value;
  if (zip === "" || zip === null) {
    console.log("Please enter valid zip code.");
    return;
  }
  const userResponse = document.getElementById('feelings').value;
  getWeatherData(apiBaseURL, zip, country, appID)
  .then(function(data){
    // console.log(data.main.temp);
    let date = new Date(data.dt * 1000);
    postWeatherData('/weather', {temperature: data.main.temp, date: date.toLocaleDateString(), userip: userResponse});
  })
  .then(function() {
    updateWeatherUI();
  }
  );
  // console.log('data', data);
}

//get request to get weather data
const getWeatherData = async(baseUrl, zip, country, key) => {
  const wURL = apiBaseURL+zip+','+country+'&units=imperial'+'&appid='+key;
  // console.log(wURL);
  const res = await fetch(wURL);
  try {
    const data = await res.json();
    // console.log(data.main);
    return data;
  } catch(e) {
    console.log('Error', e);
  }
}

//post request
const postWeatherData = async(url='', data={}) => {
  // console.log("In Post 1", url, data);
  const res = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await res.json();
    // console.log("In post data", newData);
    return newData;
  } catch (e) {
    console.log('Error', e);
  }
}

// update UI with weather database
const updateWeatherUI = async() => {
  const req = await fetch('/all');
  try {
    const data = await req.json();
    document.getElementById('date').innerHTML = data.date;
    document.getElementById('temp').innerHTML = data.temperature;
    document.getElementById('content').innerHTML = data.userip;
  } catch (e) {
    console.log('Error - ', e);
  }
}