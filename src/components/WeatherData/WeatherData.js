import { useSelector } from "react-redux";
import convertUnixTime from "../../utils/convertUnixTime";
import "./WeatherData.css";

const WeatherData = () => {
  const searchState = useSelector((state) => state.searchState);
  const data = searchState.searchResults;

  return (
    <div className="data-container">
      <div className="top-container">
        <div className="location-container">
          <p>{data.name}</p>
          <div className="temp">
            {data.main ? <h1>{Math.round(data.main.temp)}°F</h1> : null}
          </div>
        </div>
        <div className="description-container">
          {data.weather ? (
            <img
              className="weather-icon-container"
              src={searchState.iconUrl}
              alt="weather-icon"
            />
          ) : null}
          {data.weather ? (
            <p className="">{data.weather[0].description}</p>
          ) : null}
        </div>
      </div>
      <div className="bottom-container">
        <div className="bottom-description-container">
          <div className="feels">
            {data.main ? (
              <p className="bold">{Math.round(data.main.feels_like)}°F</p>
            ) : null}
            {data.main ? <p>Feels Like</p> : null}
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
            {data.main ? <p>Humidity</p> : null}
          </div>
          <div className="wind">
            {data.wind ? (
              <p className="bold">{Math.round(data.wind.speed)}MPH</p>
            ) : null}
            {data.wind ? <p>Wind Speed</p> : null}
          </div>
        </div>
        <div className="bottom-description-container">
          <div className="sunrise">
            {data.sys ? (
              <p className="bold">
                {convertUnixTime(data.sys.sunrise, data.timezone)}
              </p>
            ) : null}
            {data.sys ? <p>Sunrise</p> : null}
          </div>
          <div className="sunset">
            {data.sys ? (
              <p className="bold">
                {convertUnixTime(data.sys.sunset, data.timezone)}
              </p>
            ) : null}
            {data.sys ? <p>Sunset</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
