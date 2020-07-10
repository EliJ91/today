import React from 'react';
import image from '../../img/image.png';
import styled from "styled-components";

const newsStyle = {
  height: "70px",
  width: "70px",
  marginRight: "5px"
}
const Article = styled.div`
  display:flex;
  max-width: 700px;
  border: 2px solid black;
  border-radius: 5px;
  margin: 10px;
`
const newsInfo = styled.p`
  margin: 0;
  font-size: 10px;
`


function News() {
      
    return (
      <div>
        <Article><img src={image} style={newsStyle} /> <newsInfo>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci id sed labore voluptatibus illum, rerum autem amet fugit recusandae iste a vitae voluptates, quisquam doloremque itaque ratione at illo quibusdam?</newsInfo></Article>

        <Article><img src={image} style={newsStyle} /> <newsInfo>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci id sed labore voluptatibus illum, rerum autem amet fugit recusandae iste a vitae voluptates, quisquam doloremque itaque ratione at illo quibusdam?</newsInfo></Article>

        <Article><img src={image} style={newsStyle} /> <newsInfo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptas doloremque tempore rerum. Nulla eveniet sit facere fugiat reprehenderit iste suscipit porro saepe non officiis, esse quibusdam amet asperiores laboriosam.</newsInfo></Article>             
      </div>
      


    );
  }

  export default News;
