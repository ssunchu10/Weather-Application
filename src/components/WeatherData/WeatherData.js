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
              className="weather-icon"
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
        <div className="bottom-description">
          <div className="feels">
            {data.main ? (
              <p className="bold">{Math.round(data.main.feels_like)}°F</p>
            ) : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? (
              <p className="bold">{Math.round(data.wind.speed)}MPH</p>
            ) : null}
            <p>Wind Speed</p>
          </div>
        </div>
        {/* <div className="bottom-description">
          <div className="sunrise">
            <p className="bold">
              {convertUnixTime(data.sys.sunrise, data.timezone)}
            </p>
            <p>Sunrise</p>
          </div>
          <div className="sunset">
            <p className="bold">
              {convertUnixTime(data.sys.sunset, data.timezone)}
            </p>
            <p>Sunset</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default WeatherData;
