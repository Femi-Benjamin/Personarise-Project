import React, {useEffect, useState} from 'react'
import axios from 'axios'

const HomeLayout = () => {



  ///this code is to call user immediately after google login
  const [token, setToken] = useState(null);

  useEffect(()=>{
    const getUser = ()=>{
      fetch("https://project-x-g8rg.onrender.com/api/user/login/success", {
        method:"GET", 
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
       .then((response) => {
        if (response.status === 200) return response.json();
        throw new Error("authentication has been failed!");
       })
       .then((resObject) => {
        setToken(resObject.token);
      })
       .catch((err) => {
        console.log(err);
      });
    };
    getUser();
  },[]);
  console.log(token)

  return <div>Homeee</div>
}

export default HomeLayout
