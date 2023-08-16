import React from "react";
import './register.css';
import Singup from "./Singup";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Home(){

   
    return(
       
            <>

 <div className="container " id="box" >
    <div className="image-part">
        <img src="logo.png" className="social-image" alt="image" />
      
    </div>
    <div className="join-part  ">
        <div className="title">
            <h1>Relaxo</h1>
        </div>
        <p className=" text-center" id="slogan"  >GREAT THINKING <br/> ARE COMING !</p>
      <br></br>
     <Link to="/singup"><button class="btn btn-primary" id="btn" type="button" >Join Now</button>
      
      </Link>
      
<div className="login-part" >
    
<Link to="/login" >Already have an account ?{">"}</Link>
</div>
    </div>
 </div>
 

</>

    );
}
