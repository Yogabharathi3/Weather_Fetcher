
async function getWeather() {
  const city = document.getElementById("city").value;
  const weather = document.getElementById("weather");

  if (!city) {
    weather.innerHTML = "Please enter a city name.";
    weather.style.display = "block";
    return;
  }

  const apiKey = "1d8af4ac684b4fa480a100020251107";
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("City not found");

    const data = await res.json();
    const { name, country } = data.location;
    const { temp_c, condition } = data.current;

   weather.innerHTML = `
  <h2>${name}, ${country}</h2>
  <p><strong>${temp_c}°C</strong></p>
  <p>${condition.text}</p>
  <p>Last updated: ${data.current.last_updated}</p>
`;

    weather.style.display = "block";
  } catch (error) {
    weather.innerHTML = "Error fetching weather data.";
    weather.style.display = "block";
    console.error(error);
  }
}
