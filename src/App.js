import React, { useState, useCallback, useEffect } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState("Delhi");
  const [weatherData, setWeatherData] = useState(null);
  const [translatedText, setTranslatedText] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = "bcda10ba323e88e96cb486015a104d1d";
  const TRANSLATOR_API_KEY = process.env.REACT_APP_TRANSLATOR_API_KEY;
  const TRANSLATOR_ENDPOINT = process.env.REACT_APP_TRANSLATOR_ENDPOINT;

  const fetchWeatherData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      setWeatherData(data);

      if (data.weather && data.weather[0] && data.weather[0].description) {
        await fetchTranslatedText(data.weather[0].description);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setLoading(false);
    }
  }, [city]);

  const fetchTranslatedText = async (text) => {
    try {
      const response = await fetch(
        `${TRANSLATOR_ENDPOINT}/translate?api-version=3.0&to=en`, {
          method: 'POST',
          headers: {
            'Ocp-Apim-Subscription-Key': TRANSLATOR_API_KEY,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify([{ Text: text }])
        }
      );
      const data = await response.json();
      setTranslatedText(data[0]?.translations[0]?.text || 'No translation available');
    } catch (error) {
      console.error("Error fetching translation:", error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, [fetchWeatherData]);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData();
  };

  const getWeatherIconUrl = (main) => {
    switch (main) {
      case "Clouds":
        return "/thunder.png"; 
      case "Rain":
        return "/rain_with_cloud.png"; 
      case "Mist":
        return "/Tornado.png"; 
      case "Haze":  
        return "/sun.png"; 
      default:
        return null;
    }
  };

  return (
    <div className="outer">
      <div className="App">
        <div className="container">
          {loading && !weatherData ? (
            <div className="loading-message">Loading weather data...</div>
          ) : weatherData ? (
            <>
              <h1 className="container_date">{new Date().toLocaleDateString()}</h1>
              <div className="weather_data">
                <h2 className="container_city">{weatherData.name}</h2>
                <img
                  className="container_img"
                  src={getWeatherIconUrl(weatherData.weather ? weatherData.weather[0].main : 'Unknown')}
                  width="180px"
                  alt="Weather Icon"
                />
                <h2 className="container_degree">
                  {weatherData.main ? weatherData.main.temp : 'N/A'} °C
                </h2>
                <h2 className="country_per">
                  {translatedText || (weatherData.weather && weatherData.weather[0] ? weatherData.weather[0].main : 'No data available')}
                </h2>
                <form className="form" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    className="input"
                    placeholder="Enter city name"
                    value={city}
                    onChange={handleInputChange}
                    required
                  />
                  <button type="submit">Search</button>
                </form>
              </div>
            </>
          ) : (
            <p>No weather data available. Please search for a city.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
