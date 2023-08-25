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
export default function Home(){
 const d=Profiledata[0];
 console.log(d);
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
         {PostData.map((d)=>{
          return <Postpage key={d.id} name={d.name} username={d.username} userImage={d.userImage} post={d.post} postImg={d.imageUrl} like={d.like} comment={d.comment} height={d.height}></Postpage>
          })}
            </>
        </Route>
          <Route path="/search">
            <RightNavbar></RightNavbar>
          </Route>
          <Route path="/reels">
          
          </Route>
         
          <Route path="/saved">
          <div className="p-3 h3">Saved Posts</div>
           <div style={{position:"absolute",right:"35%",width:"40%"}}> 
           
          <Saved></Saved>
           </div>
          
          </Route>
          <Route path="/profile">
            <div style={{width:"auto"}}>
             
    
        
    <UserProfile key={d.id}  name={d.name} userback={d.userback} userlink={d.userlink} following={d.following} followers={d.followers} userjoin={d.userjoin}  username={d.username} profileImg={d.profileImg} userbio={d.userbio} ></UserProfile>
 
   
    


      
   
   
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