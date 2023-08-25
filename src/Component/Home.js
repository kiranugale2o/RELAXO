import React from "react";
import './home.css';
import PostData from '../Relaxobackend/PostData'
import RightNavbar from "../Navbars/RightNavbar";
import Postpage from "../PostHandle/Postpage";
import UserProfile from "./UserProfile";
import LeftNavbar from "../Navbars/LeftNavbar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import CreatePost from "./CreatePost";
import Emoji from "./Emoji";
import Profile from "./Profile";
import Profiledata from "../Relaxobackend/Profiledata";
import Saved from "./Saved";
import Savepost from "../Relaxobackend/Savepost";
import Login from "../authorizationpart/Login";
import Register from "../authorizationpart/Register";
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


          <Route path="/search">
            <RightNavbar></RightNavbar>
          </Route>
          <Route path="/explore">
          <div className="p-3 h3">Posts</div>
         
            <div className="postofe">
          {PostData.map((d)=>{
          return <Postpage  key={d.id} vishow={d.vishow} name={d.name} username={d.username} userImage={d.userImage} post={d.post} postImg={d.imageUrl} like={d.like} comment={d.comment} height={d.height}></Postpage>
          })}</div>
          </Route>
        
          <Route path="/saved">
          <div className="p-3 h3">Saved Posts</div>
           <div style={{position:"absolute",right:"35%",width:"40%"}}> 
           
          <Saved></Saved>
           </div>
          
          </Route>
          <Route path="/login">
          
         </Route>
          <Route path="/profile">
            <div style={{width:"auto"}}>
             <UserProfile></UserProfile>
           </div>
     
          </Route>
          <Route path="/">
<div className="p-3 h3">Letest Post</div>
            <CreatePost></CreatePost>
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