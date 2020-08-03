import React from 'react';
import styled from "styled-components";

const StocksInfo = styled.table` 
  position: relative;
  top:7%;
  border: 2px solid black;
  border-radius: 5px;
`
const Table = styled.tbody`  
  margin-left: auto;
  margin-right: auto;
`

const Head = styled.th`
  width: 8rem;
  text-align: left;
  font-size: 1rem;
  padding: .5rem;
`

const Data = styled.td`
  font-size: 1rem;
  padding: .5rem;
`



function Stocks() {
      
    return (
      <StocksInfo>
        <Table >
          <tr>
            <Head>Company</Head>
            <Head>Symbol</Head>
            <Head>Value</Head>
            <th>Groth</th>
          </tr>
          <tr>
            <Data>Apple</Data>
            <Data>AAPL</Data>
            <Data>$56.67</Data>
            <Data>+5.8%</Data>
          </tr>
          <tr>
            <Data>Apple</Data>
            <Data>AAPL</Data>
            <Data>$56.67</Data>
            <Data>+5.8%</Data>
          </tr>
          <tr>
            <Data>Apple</Data>
            <Data>AAPL</Data>
            <Data>$56.67</Data>
            <Data>+5.8%</Data>
          </tr>
          <tr>
            <Data>Apple</Data>
            <Data>AAPL</Data>
            <Data>$56.67</Data>
            <Data>+5.8%</Data>
          </tr>
          <tr>
            <Data>Apple</Data>
            <Data>AAPL</Data>
            <Data>$56.67</Data>
            <Data>+5.8%</Data>
          </tr>
      </Table>
        
      

      


      </StocksInfo>
    );
  }

  export default Stocks;
