import React,{useState,useEffect} from 'react';
import styled from "styled-components";
import axios from "axios";
import {log_in} from '../../Redux/actions';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';



const Logincontainer = styled.div`
  margin-top: 10rem;
  margin-bottom: auto;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto; 
`
const LoginButton = styled.button`
    width: 65%;
    background: blue;
    color: white;
    font-size: 20px;
    margin: 10px auto 10px auto;
    text-align: center;
    padding: 5px;
    border-radius: 10px;
    font-weight: bold;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
`
const Username = styled.input`
    display: block;
    margin: 10px auto 0px auto;
    width: 65%;
    font-size: 1.2rem;
`
const Password = styled.input`
    display: block;
    margin: 10px auto 0px auto;
    width: 65%;
    font-size: 1.2rem;
`
const DevPanel = styled.p`
  position: fixed;
  top: 0;
  left: 50 ;
`




function Login() {
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const dispatch = useDispatch()
  let history = useHistory()

   const [UserData, setUserData]=useState( 
    {
      user:{
        first_name: "",
        last_name: "",
        logged: true,
      },
      weatherInfo:
          {
              city: "Deltona",
              zip: 55555,
              temp:100,
              icon: "c01d",
              state: "FL",
              clouds: "Sunny"
          },
      stocks:[
        {name: "stock1", symbol:"sym", value:0, growth: 0 },
        {name: "stock2", symbol:"sym", value:0, growth: 0 },
        {name: "stock3", symbol:"sym", value:0, growth: 0 },
        {name: "stock4", symbol:"sym", value:0, growth: 0 },
        {name: "stock5", symbol:"sym", value:0, growth: 0 }
      ] 
    }
  )
  
  
  const userLogin = () => {
    axios.post('https://reto95petk.execute-api.us-east-1.amazonaws.com/dev/user', {
      email: email,
      password: password
    })
    .then(function (userDbData) {     // GET WEATHER DATA
      setUserData({...UserData, user: {
        first_name: userDbData.data.first_name,
        last_name: userDbData.data.last_name,
        logged: userDbData.data.logged}       
      })
      
      axios.get('https://reto95petk.execute-api.us-east-1.amazonaws.com/dev/weather/'+userDbData.data.zip)
      .then(function (weatherData) {
        console.log(weatherData.data.weather.data[0].city_name)
        setUserData({...UserData, weatherInfo: {
              city: weatherData.data.weather.data[0].city_name,
              zip: 55555,
              temp:100,
              icon: "c01d",
              state: "FL",
              clouds: "Updated"
            }       
        })      
      })
      
      dispatch(log_in(UserData))
      console.log(UserData)
      //setTimeout(history.push("/"), 1500) 
    })
    .catch(function (error) {
        console.log(error);
      })  
  ///////////////////////////////////////
    
    }
//-------------------------------------------------------------------
  
    const logIt = ()=>{
      console.log(UserData)
    }




  return ( 
    <Logincontainer>
        <Username onChange={(e)=>setEmail(e.target.value)} placeholder="Email"></Username>
        <Password onChange={(e)=>setPassword(e.target.value)} placeholder="Password"></Password>
        <LoginButton  onClick={userLogin}>Log In</LoginButton>
        <DevPanel><button onClick={logIt} >Log User Data</button></DevPanel>
    </Logincontainer>
  );
}

export default Login;