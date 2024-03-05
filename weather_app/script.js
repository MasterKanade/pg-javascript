const btnElement = document.getElementById("btn-srch");
const cityInput = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");

async function getWeatherData(cityName) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=fe364efe4ba74595ba170104240503&q=${cityName}&aqi=yes`
  );
  return await promise.json();
}

btnElement.addEventListener("click", async () => {
  const value = cityInput.value;
  const result = await getWeatherData(value);
  console.log(result);
  cityName.innerText = `${result.location.name} , ${result.location.region} , ${result.location.country}`;
  cityTime.innerText = `${result.location.localtime}`;
  cityTemp.innerText = `${result.current.temp_c} , ${result.current.temp_f}`;
});
