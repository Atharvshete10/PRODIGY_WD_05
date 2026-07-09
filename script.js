const apiKey = "adce7b79f21a6c80a87cb717f9d0f415";

async function getWeather(){

const city = document.getElementById("city").value;

if(city===""){

alert("Enter a city name");

return;

}

const url =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

try{

const response = await fetch(url);

const data = await response.json();

if(data.cod!="200"){

alert("City not found");

return;

}

document.getElementById("cityName").innerHTML =
data.name;

document.getElementById("temp").innerHTML =
"🌡 Temperature : "+data.main.temp+" °C";

document.getElementById("condition").innerHTML =
"☁ Weather : "+data.weather[0].main;

document.getElementById("humidity").innerHTML =
"💧 Humidity : "+data.main.humidity+"%";

document.getElementById("wind").innerHTML =
"🌬 Wind Speed : "+data.wind.speed+" m/s";

}

catch(error){

alert("Error fetching weather");

}

}