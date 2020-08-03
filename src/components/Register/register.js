import React, {useState} from 'react';
import styled from "styled-components";
import axios from "axios";



const Logincontainer = styled.div`
  margin-top: 10rem;
  margin-bottom: auto;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto; 
  border: 2px solid black;
  border-radius: 10px;
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
const Email = styled.input`
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
const Zipcode = styled.input`
    display: block;
    margin: 10px auto 0px auto;
    width: 25%;
    font-size: 1.2rem;
`
const Stock = styled.input`
    display: block;
    margin: 10px auto 0px auto;
    width: 25%;
    font-size: 1.2rem;
`
const Name = styled.input`
    display: block;
    margin: 10px auto 0px auto;
    width: 40%;
    font-size: 1.2rem;
`



const Error = styled.p`
  margin: 10px auto 0px auto;
  width: 65%;
  font-size: 1.2rem;
  text-align: center;
  color: red;
  font-weight: bold;
`






function Register() {

  
  const [first_name, setFirstName]=useState("")
  const [last_name, setLastName]=useState("")
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const [password2, setPassword2]=useState("")
  const [zipcode, setZipcode]=useState("")
  const [stock1, setStock1]=useState("")
  const [stock2, setStock2]=useState("")
  const [stock3, setStock3]=useState("")
  const [stock4, setStock4]=useState("")
  const [stock5, setStock5]=useState("")
  var stocks = [stock1, stock2, stock3, stock4, stock5]
  const [opacity, setOpacity]=useState(0)
  const [message, setMessage]=useState("")


  const clearInput = () => {
    setFirstName("")
    setLastName("")
    setEmail("")
    setPassword("")
    setPassword2("")
    setZipcode("")
    setStock1("")
    setStock2("")
    setStock3("")
    setStock4("")
    setStock5("")
    }

  

  const submit =  e => {
    e.preventDefault()
    if(password !== password2){ 
      setOpacity(1)
      setMessage("Passwords do not match!")
      const timer = setTimeout(() => {
        setOpacity(0)
      }, 5000);
      return () => clearTimeout(timer);      
    }else{
      setOpacity(0)    
      axios.post('https://reto95petk.execute-api.us-east-1.amazonaws.com/dev/user/create', 
      {
        first_name: first_name,
        last_name: last_name,
        zip: zipcode,
        email: email,
        stock: stocks,
        password: password      
      })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
      setOpacity(1)
      setMessage("Account created!")
      clearInput()
      const timer = setTimeout(() => {
        setOpacity(0)
      }, 5000);
      return () => clearTimeout(timer);
  }
}
  
  
  return ( 
    <Logincontainer>
        <div style={{display:"flex"}}><Name value={first_name} onChange={(e)=>setFirstName(e.target.value)} placeholder="First Name*" /><Name value={last_name} onChange={(e)=>setLastName(e.target.value)} placeholder="Last Name*" /></div>
        <Email    value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email*"></Email>
        <Password value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password*"></Password>
        <Password value={password2} onChange={(e)=>setPassword2(e.target.value)} placeholder="Password*"></Password>
        <Zipcode  value={zipcode} onChange={(e)=>setZipcode(e.target.value)} placeholder="Zipcode*"></Zipcode>
        <Stock    value={stock1} onChange={(e)=>setStock1(e.target.value)} placeholder="Stock Symbol"></Stock>
        <Stock    value={stock2} onChange={(e)=>setStock2(e.target.value)} placeholder="Stock Symbol"></Stock>
        <Stock    value={stock3} onChange={(e)=>setStock3(e.target.value)} placeholder="Stock Symbol"></Stock>
        <Stock    value={stock4} onChange={(e)=>setStock4(e.target.value)} placeholder="Stock Symbol"></Stock>
        <Stock    value={stock5} onChange={(e)=>setStock5(e.target.value)} placeholder="Stock Symbol"></Stock>
        <LoginButton type="submit" value="submit" onClick={submit}> Register</LoginButton>
        <Error style={{opacity}}>{message}</Error>
    </Logincontainer>
  );
}

export default Register;