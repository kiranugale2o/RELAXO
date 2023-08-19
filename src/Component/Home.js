import React from "react";
import './home.css';
import RightNavbar from "../Navbars/RightNavbar";
import Postpage from "../PostHandle/Postpage";
import LeftNavbar from "../Navbars/LeftNavbar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default function Home(){

    return(
        <>
        <Router>
        <div style={{width:"100%",display:"flex"}}>
        <div className="leftbar" >
<LeftNavbar></LeftNavbar>
        </div>
        <div className="insert-page">
         <Route path="/post">
           <> <Link to="post">k</Link></>
         </Route>
         <Route exact path="/"></Route>
        </div>
           <div className="rightbar">
           <RightNavbar></RightNavbar>
           </div>
           </div>
           </Router>
        </>
    );
}