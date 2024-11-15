document.getElementById("search-btn").addEventListener("click", () => {
  const city = document.getElementById("city-input").value;
  const apiKey = "a393a1d9db732e99ca504204603d38e8";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  console.log(apiUrl);

  fetch(apiUrl)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data.cod === 200) {
        document.getElementById("weather-info").innerHTML = `
                    <h2>${data.name}</h2>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                `;
      } else {
        document.getElementById(
          "weather-info"
        ).innerHTML = `<p>City not found</p>`;
      }
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      document.getElementById(
        "weather-info"
      ).innerHTML = `<p>Error fetching data</p>`;
    });
});
