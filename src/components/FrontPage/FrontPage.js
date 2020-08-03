import React,{useState} from 'react';
import styled from "styled-components";
import Weather from '../weather/weather';
import Stocks from '../stockMarket/stockMarket';
import News from '../news/news';



const AppContainer = styled.div`
  margin-top: 5rem;
  margin-bottom: auto;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto; 
`
const WeatherStocksContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 5fr;
  margin-left: auto;
  margin-right: auto;
`
const NewsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 3rem;
`

const SearchBar = styled.input`
  width: 100%;
  border: 2px solid black;
  margin-top: 50px;
  margin-bottom:50px;
  margin-left:auto;
  margin-right:auto;
  border-radius: 10px;
  padding: 3px;
`

//{testUser.payload.first_name}



function FrontPage() {
  
  const [searchInput, setSearchInput]=useState('') 
  const search = (event)=>{
  if (event.key === "Enter") {
    console.log(searchInput)
    window.open("http://www.google.com/search?q="+searchInput, "blank")
  }
}
     //to open new page


    return (
      <AppContainer>
          <SearchBar placeholder="Search..." onKeyPress={search} onChange={(e)=>setSearchInput(e.target.value)}></SearchBar>
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

  export default FrontPage;


  