import React from 'react';
import styled from "styled-components";
import image from '../../img/weather.png'

const WeatherInfo = styled.div `
  padding: 0;
`
const imageStyle = {
  width: "80%",
  marginLeft: "30px"
}

function Weather() {

  return ( 
    <WeatherInfo><img src={image} style={imageStyle} /> </WeatherInfo>
  );
}

export default Weather;