const apiKey = "YOUR_API_KEY"; // 🔑 Replace with your OpenWeatherMap API key

document.getElementById("searchBtn").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value;
  if (city) {
    getWeather(city);
  } else {
    alert("Please enter a city name!");
  }
});

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    showWeather(data);
  } catch (error) {
    alert(error.message);
  }
}

function showWeather(data) {
  document.getElementById("weatherResult").style.display = "block";
  document.getElementById("cityName").textContent = data.name;
  document.getElementById("temp").textContent = `🌡️ ${data.main.temp}°C`;
  document.getElementById("desc").textContent = data.weather[0].description;
  document.getElementById("icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}
