import { useState } from 'react'
import logo from './logo.svg'

import { NavBar } from './components/Navbar'
import {useContext } from "react";
import {IsAuthContext} from "./context/IsAuth"



function App() {
  const {isAuth} = useContext(IsAuthContext);
  const [query,setQuery] =useState("");
  const [password,setPassword] = useState("");
  

  const [data ,setData]=useState("");
  const [token,setToken] = useState("");


  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(query);
    const data={
      email:query,
      password:password
    }
    axios.post("https://reqres.in/api/login",data)
    .then((res)=>{
      console.log(res.data.token)
      setData(res)
      setToken(res.data.token)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div className="App">
      <h2>{isAuth ? "User logged in " : "User logged out"}</h2>
      <NavBar />
      <form>
        UserName :
        <input
          type="text"
          placeholder="user name"
          name="email"
          onChange={(e) => setQuery(e.target.value)}
        />{" "}
        <br />
        Password :
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <input type="submit" value="Login" />
      </form>
      <h2>{token}</h2>
    </div>
  );
}

export default App
