import React from "react";
import './home.css';
import PostData from '../Relaxobackend/PostData'
import RightNavbar from "../Navbars/RightNavbar";
import Postpage from "../PostHandle/Postpage";
import LeftNavbar from "../Navbars/LeftNavbar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import CreatePost from "./CreatePost";
import Emoji from "./Emoji";
export default function Home(){

    return(
       <>
       <Router>

        <div className="home-page">
          <div className="leftbar">
            <LeftNavbar></LeftNavbar>
          </div>
          <div className="insert-page">
          <Switch>

          <Route path="/post">
         <> <div className="h3 p-3">Letest Posts</div>
         <CreatePost></CreatePost>
       
          </>
        </Route>
          <Route path="/search">
            <RightNavbar></RightNavbar>
          </Route>
          <Route path="/reels">
          <CreatePost></CreatePost>
          </Route>
          <Route path="/profile">
           <Emoji></Emoji>
          </Route>
          <Route path="/saved">
           <>saved</>
          </Route>
          </Switch>
          </div>
          <div className="rightbar">
            <RightNavbar></RightNavbar>
          </div>
          </div>
       </Router>
       </>
       );
}