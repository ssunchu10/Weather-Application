import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState("");
  const [iconURL, setIconURL] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=630b47da595bd59784417268bdd1d863&units=imperial`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
        const iconCode = response.data.weather[0].icon;
        setIconURL(`https://openweathermap.org/img/wn/${iconCode}@2x.png`);
      });
      setLocation("");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>

      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
            <div className="temp">
              {data.main ? <h1>{Math.round(data.main.temp)}°F</h1> : null}
            </div>
          </div>
          <div className="description">
            {data.weather ? (
              <img className="weather-icon" src={iconURL} alt="weather-icon" />
            ) : null}
            {data.weather ? (
              <p className="">{data.weather[0].description}</p>
            ) : null}
          </div>
        </div>

        {data.name !== undefined ? (
          <div className="bottom">
            <div className="bottom-description">
              <div className="feels">
                {data.main ? (
                  <p className="bold">{Math.round(data.main.feels_like)}°F</p>
                ) : null}
                <p>Feels Like</p>
              </div>
              <div className="humidity">
                {data.main ? (
                  <p className="bold">{data.main.humidity}%</p>
                ) : null}
                <p>Humidity</p>
              </div>
              <div className="wind">
                {data.wind ? (
                  <p className="bold">{Math.round(data.wind.speed)}MPH</p>
                ) : null}
                <p>Wind Speed</p>
              </div>
            </div>
            <div className="bottom-description">
              <div className="sunrise">
                <p className="bold">{convertUnixTime(data.sys.sunrise)}AM</p>
                <p>Sunrise</p>
              </div>
              <div className="sunset">
                <p className="bold">{convertUnixTime(data.sys.sunset)}PM</p>
                <p>Sunset</p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

const convertUnixTime = (unixtime) => {
  let dateObj = new Date(unixtime * 1000);
  let utcString = dateObj.toUTCString();
  const time = utcString.slice(-11, -7);

  return time;
};

export default App;
