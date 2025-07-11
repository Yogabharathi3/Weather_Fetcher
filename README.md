# Weather_Fetcher
## Date:07.11.2025
## Objective:
To demonstrate how to use Promises and async/await in JavaScript by fetching and displaying live weather data from an API. This activity reinforces real-world async data handling in web applications.

## Tasks:

#### 1. Create the HTML Structure:
Add a heading like ```<h1>WeatherNow</h1>```

Create an ```<input>``` for the city name

Add a ```<button>``` to trigger the fetch

Create a <div> to display the weather information

#### 2. Style with CSS:
Center the layout and style input and button

Style the weather output box with borders, padding, and a background color

Add hover effects for the button

#### 3. JavaScript with Promises and Async/Await:
Use fetch() to get weather data from a free API like https://api.weatherapi.com or a mock API

Wrap the fetch in an async function

Use await to wait for the response and parse it as JSON

Use .catch() to handle any errors in the promise

Display the temperature, description, and location in the output div
## HTML Code:
```

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>WeatherNow</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>WeatherNow</h1>
  <div class="container">
    <input type="text" id="city" placeholder="Enter city name">
    <button onclick="getWeather()">Get Weather</button>
    <div id="weather"></div>
  </div>
  <script src="script.js"></script>
</body>
</html>
```
## CSS Code:
```
body {
  font-family: Arial, sans-serif;
  background: lightblue;
  display: flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  height: 100vh;
}

.container {
  text-align: center;
  background:lightgoldenrodyellow;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

input {
  padding: 10px;
  width: 60%;
  border: 1px solid whitesmoke;
  border-radius: 6px;
  margin-bottom: 10px;
}

button {
  padding: 10px 20px;
  background-color: lightseagreen;
  color: white;
  border: none;
  border-radius: 6px;
  width: 65%;
}

button:hover {
  background-color: #45677f;
}

#weather {
  margin-top: 20px;
  padding: 15px;
  border-radius: 8px;
  background: #d9f1ff;
  display: none;
}
```
## JavaScript Code:
```

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
```
## Output:
<img width="936" height="907" alt="image" src="https://github.com/user-attachments/assets/e29123c0-0b16-42e6-acd4-7ad098b78435" />

## Result:
A mini module that successfully uses Promises and async/await to handle real-time API data, reinforcing asynchronous JavaScript patterns in a practical context.
