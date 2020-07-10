import React from 'react';
import './layout.css';
import { Paper } from "@material-ui/core";
import styled from "styled-components";
import Weather from '../weather/weather';
import Stocks from '../stockMarket/stockMarket';
import News from '../news/news';
import logo from '../../img/today_logo.png';


const AppContainer = styled.div`
  margin-left:35px;
  margin-right:35px;
`
const Title = styled.div`
  text-align: center;
  margin-bottom: 50px;
  margin-top: 15px
`
const WeatherStocksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left:65px;
  margin-right:65px;
  
`
const NewsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const SearchBar = styled.div`
  width: 80%;
  border: 2px solid black;
  margin-top: 50px;
  margin-bottom:50px;
  margin-left:auto;
  margin-right:auto;
  border-radius: 10px;
  padding: 3px;
`

const SignIn = styled.p`
  position: fixed;
  top:0;
  right:10px;
  font-size: 10px;
  color: blue;
`

const logoStyle = {
  height: "50px"
}

function layout() {
      
    return (
      <AppContainer>

          <Title><img src={logo} style={logoStyle} /></Title>
          <SignIn>Register | Sign In!</SignIn>
          <SearchBar>Search here...</SearchBar>
          <WeatherStocksContainer>
            <Weather />
            <Stocks />
          </WeatherStocksContainer>

          <NewsContainer>
              <News />
          </NewsContainer>
      </AppContainer>
    );
  }

  export default layout;


  