import axios from "axios"

export const getWeather = async (location) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=630b47da595bd59784417268bdd1d863&units=imperial`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log("There is an error! ", error.message);
        return null;
    }

}