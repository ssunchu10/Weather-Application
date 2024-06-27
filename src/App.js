// import axios from "axios";
// import { useState } from "react";
// import moment from "moment";
import SearchBar from "./components/Search/SearchBar";

// const App = () => {
//   const [data, setData] = useState([]);
//   const [location, setLocation] = useState("");
//   const [iconURL, setIconURL] = useState("");
//   const [error, setError] = useState("");

//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=630b47da595bd59784417268bdd1d863&units=imperial`;

//   const searchLocation = (event) => {
//     if (event.key === "Enter") {
//       axios.get(url).then((response) => {
//         setData(response.data);
//         setError("");
//         console.log(response.data);
//         const iconCode = response.data.weather[0].icon;
//         setIconURL(`https://openweathermap.org/img/wn/${iconCode}@2x.png`);
//       }).catch((error) => {
//         setError("*Location not found!*");
//         console.error("Error!: ", error.message);
//       });
//       setLocation("");
//     }
//   };

//   return (
//     <div className="app">
//       <div className="search">
//         <input
//           value={location}
//           onChange={(event) => setLocation(event.target.value)}
//           onKeyPress={searchLocation}
//           placeholder="Enter Location"
//           type="text"
//         />
//       </div>
//       <div className="error">
//         {error.length !== 0 ? <p>{error}</p> : null}
//       </div>

//       <div className="container">
//         <div className="top">
//           <div className="location">
//             <p>{data.name}</p>
//             <div className="temp">
//               {data.main ? <h1>{Math.round(data.main.temp)}°F</h1> : null}
//             </div>
//           </div>
//           <div className="description">
//             {data.weather ? (
//               <img className="weather-icon" src={iconURL} alt="weather-icon" />
//             ) : null}
//             {data.weather ? (
//               <p className="">{data.weather[0].description}</p>
//             ) : null}
//           </div>
//         </div>

//         {data.name !== undefined ? (
//           <div className="bottom">
//             <div className="bottom-description">
//               <div className="feels">
//                 {data.main ? (
//                   <p className="bold">{Math.round(data.main.feels_like)}°F</p>
//                 ) : null}
//                 <p>Feels Like</p>
//               </div>
//               <div className="humidity">
//                 {data.main ? (
//                   <p className="bold">{data.main.humidity}%</p>
//                 ) : null}
//                 <p>Humidity</p>
//               </div>
//               <div className="wind">
//                 {data.wind ? (
//                   <p className="bold">{Math.round(data.wind.speed)}MPH</p>
//                 ) : null}
//                 <p>Wind Speed</p>
//               </div>
//             </div>
//             <div className="bottom-description">
//               <div className="sunrise">
//                 <p className="bold">{convertUnixTime(data.sys.sunrise, data.timezone)}</p>
//                 <p>Sunrise</p>
//               </div>
//               <div className="sunset">
//                 <p className="bold">{convertUnixTime(data.sys.sunset, data.timezone)}</p>
//                 <p>Sunset</p>
//               </div>
//             </div>
//           </div>
//         ) : null}
//       </div>
//     </div>
//   );
// };

// const convertUnixTime = (unixtime, timezonOffset) => {
//   return moment.unix(unixtime).utcOffset(timezonOffset / 60).format("h:mm A");
// };

const App = () => {
  return (
    <div className="app">
      <SearchBar />
    </div>
  );
};
export default App;
