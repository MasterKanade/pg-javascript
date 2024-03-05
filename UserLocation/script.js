const locationBtn = document.getElementById("get-location-button");
const lat = document.getElementById("lat_id");
const longit = document.getElementById("long_id");
const container = document.getElementById("container");

function failedToGet() {
  console.log("There was some issues");
}

locationBtn.addEventListener("click", async () => {
  const result = navigator.geolocation.getCurrentPosition(
    getLocation,
    failedToGet
  );
});

async function getCordinates(lat, long) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=fe364efe4ba74595ba170104240503&q=${lat},${long}&aqi=yes`
  );
  return await promise.json();
}
async function getLocation(position) {
  const result = await getCordinates(
    position.coords.latitude,
    position.coords.longitude
  );
  console.log(result);
  lat.innerText = result.location.lat;
  longit.innerText = result.location.lon;
  container.innerHTML = `Location Name: ${result.location.name} <br>  Region: ${result.location.region} <br> State: ${result.location.country} <br> Current_Tempreature: ${result.current.temp_c}`;
}
