import React from 'react';
import styled from "styled-components";
import {useSelector} from 'react-redux';

const WeatherInfo = styled.div `
  padding: 0;
  width: 25rem;
  border: 2px solid black;
  display: grid;
  grid-gap: 0px;
`
//          Row+ Col+ Row- Col-
// grid-area: 1 / 1 / 2 / 2;
const Temperature = styled.div`
  border: 1px solid green;
  
  grid-area: 1 / 2 / 2 / 3;
  
`
const Icon = styled.img`  
  border: 1px solid blue;  
  grid-area: 1 / 1 / 2 / 2;
  
`
const City = styled.div`
  border: 1px solid red;
  grid-area: 2 / 1 / 3 / 2;
  
  
`
const Details = styled.div`
border: 1px solid orange;
grid-area: 2 / 2 / 3 / 3;
  
  
`





function Weather() {
  const User = useSelector(state=>state)  
  const weatherData = User.weatherInfo
  //const zip = userData.payload.zip
  
 // const [cityName, setCity]=useState('Please Log in to display weather Information.')  
  //const [icon, setIcon]=useState('c02d')

  // const [weatherData, setWeatherData]=useState(
  //   {
  //     city: "Deland",
  //     zip: 32744,
  //     temp: 45,
  //     icon: "c02d",
  //     state: "OK",
  //     clouds: "Cloudy"
  //   })

    
  //   const getWeather= ()=>{   
  //     setWeatherData({
  //       city: "Deltona",
  //       zip: 55555,
  //       temp:100,
  //       icon: "c01d",
  //       state: "FL",
  //       clouds: "Sunny"
  //     })
  //   }

  
  
 
  
  
  const weatherIcon = "https://www.weatherbit.io/static/img/icons/"+weatherData.icon+".png"

  return ( 
    <WeatherInfo>

    <Temperature>{weatherData.temp} </Temperature> <Icon img src={weatherIcon}/>
    <City>
      <p style={{
      marginLeft: "5px",
      fontSize: "1.5rem",
      margin: "0",
      fontWeight: "bold"
     }}>{weatherData.city},{weatherData.state}</p>
     <p>{weatherData.date}</p>
    </City> <Details>{weatherData.clouds}</Details>
    
    </WeatherInfo>
  );
}






  /*if(userData.payload.logged == true){
    axios.get('https://reto95petk.execute-api.us-east-1.amazonaws.com/dev/weather/'+zip)
    .then(function (response) {
      console.log(response);
      setCity(response.data.weather.data[0].city_name)
      setIcon(response.data.weather.data[0].weather.icon)
    })
    .catch(function (error) {
      console.log(error);
    });
    }else{
      console.log("User not logged in.")
    }*/

      

export default Weather;