import React from 'react';
import styled from "styled-components";
import image from "../../img/stocks.PNG";

const StocksInfo = styled.div`
  
`
const imageStyle = {
  width: "500px",
  marginRight: "40px",
  height: "150px",
  border: "2px solid black",
  borderRadius: "5px"
}


function Stocks() {
      
    return (
      <StocksInfo><img src={image} style={imageStyle} />
      

      


      </StocksInfo>
    );
  }

  export default Stocks;
