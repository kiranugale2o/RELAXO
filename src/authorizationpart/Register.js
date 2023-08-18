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
        <img src="https://firebasestorage.googleapis.com/v0/b/relaxo-social.appspot.com/o/backend-images%2Flogo.png?alt=media&token=d7e0fe04-f6e8-4074-9155-a1bd6357126d" className="social-image" alt="image" />
      
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
