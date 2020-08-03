import React from 'react';
import logo from '../../img/today_logo.png';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import {log_out} from '../../Redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';


const Title = styled.div`
  text-align: center;
  margin-bottom: 50px;
  margin-top: 15px
`
const logoStyle = {
  height: "50px"
}
const SignIn = styled.p`
  position: fixed;  
  top:0;
  right:10px;
  font-size: 1rem;
  color: blue;
`

const DevPanel = styled.p`
  position: fixed;
  top: 0;
  left: 0 ;
`
const Welcome = styled.span`
  font-weight: bold;
`



function NavBar() {
    
    const dispatch = useDispatch()
    const logout = ()=> dispatch(log_out())
    const User = useSelector(state => state)
    let history = useHistory()

    function logUser(){
      console.log(User)
  }

  const goHome = ()=> history.push("/")
    
    

    return (
        <div>
            <Title><img src={logo} onClick={goHome} alt="stuff" style={logoStyle} /></Title>
           
        <SignIn>                 
          {User.user.logged ? <Welcome>Welcome, {User.user.first_name}</Welcome>: <Link style={{ textDecoration: 'none',marginLeft: "5px" }} to="/"> Home </Link>}
          {User.user.logged ? <Link style={{ textDecoration: 'none',marginLeft: "5px" }} to="/" onClick={logout}> Logout </Link>: <Link style={{ textDecoration: 'none',marginLeft: "5px" }} to="/login"> Sign-In </Link>}
          {User.user.logged ? "":<Link style={{ textDecoration: 'none',marginLeft: "5px" }} to="/register"> Register </Link>} 
        </SignIn>  
        <DevPanel><button onClick={logUser}>Log User State</button></DevPanel>
        </div>
    )
  }

  export default NavBar;
