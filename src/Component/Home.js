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
        <>{PostData.map((d)=>{
          return <Postpage key={d.id} name={d.name} username={d.username} userImage={d.userImage} post={d.post} postImg={d.imageUrl} like={d.like} comment={d.comment} height={d.height}></Postpage>
          })}
          </>
        </Route>
          <Route path="/search">
            <RightNavbar></RightNavbar>
          </Route>
          <Route path="/reels">
          <>reels</>
          </Route>
          <Route path="/profile">
           <>profile</>
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