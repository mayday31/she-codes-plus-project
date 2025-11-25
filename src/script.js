function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let cityInfo = document.querySelector("#currentcity");
  cityInfo.innerHTML = searchInput.value;

  let apiKey = "86d11b15bf79a84309ce4be6o80tad43";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInput.value}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(weatherData);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDate = document.querySelector("#current-date");
let realTime = new Date();
let hours = realTime.getHours();
let minutes = realTime.getMinutes();

if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[realTime.getDay()];

currentDate.innerHTML = `${day} ${hours}:${minutes}`;

function weatherData(response) {
  let temperature = Math.round(response.data.temperature.current);
  let tempHeader = document.querySelector("#current-temp");
  tempHeader.innerHTML = `${temperature}`;
}
