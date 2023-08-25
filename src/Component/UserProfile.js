import React,{useEffect, useState} from "react";
 //import Userdata from './Relaxobackend/Userdata';
 import './profile.css';
 import Posts from "../Relaxobackend/Userdata";
import Postpage from "../PostHandle/Postpage";
import Profiledata from "../Relaxobackend/Profiledata";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom/cjs/react-router-dom";
import PostData from "../Relaxobackend/PostData";

    
export default function UserProfile(props){
           const [followBtn,setBtn]=useState("Follow");
           const[profilePost, setPost]=useState(props.posts);
           const[follow,setFollowing]=useState(props.followers);
           const[show,setShow]=useState("none");
           const btnHandler=()=>{
              toast.error("Sorry you can not Edit ")
              
              
           }
           

        return(
    <>
    <div className="userfixprofile" >
     <div className="profile border">
        <div className="backimg">
        <img src={props.userback}  style={{height:"100%",width:"100%",margin:" 20px auto"}} id="backi" ></img>
        </div>
        <div className="userimg" >
            <img src={props.profileImg} style={{width:"100%", borderRadius:"50%",height:"100px"}}  >
            </img>
           
        </div>
        <button id="follow" className="btn border" onClick={btnHandler} >Edit</button><ToastContainer></ToastContainer>
                 <div className="userinfo-profile">
            <p id="name">{props.name}</p>
            <p id="uname">{props.username}</p>
          </div>
            
<div className="bio h6">{props.userbio}</div>
<div className="link "><a style={{background:"none"}} href={props.userlink}>{props.userlink}</a></div>   
<div className="join">
<svg xmlns="http://www.w3.org/2000/svg" style={{width:"10%",fontSize:"larger",background:"none",margin:"5px 0px"}} width="16" height="16" fill="currentColor" class="bi bi-calendar-check-fill" viewBox="0 0 16 16">
  <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
</svg>
<p style={{background:"none"}}>{props.userjoin}</p>
</div>

<div className="action" style={{display:"flex",width:"80%",margin:"auto"}}>
    <p id="p-6" className="h6">Posts 0</p>
    <p id="p-6" className="h6">Followers {follow}</p>
    <p id="p-6" className="h6">Following  {props.followings}</p>
</div>
     </div>
   
 <br></br>
     <div className="user-profiles">
  { PostData.map((d)=>{
    if(d.username===props.username){
     return <Postpage key={d.id} vishow={d.vishow}  name={d.name} username={d.username} userImage={d.userImage} post={d.post} postImg={d.imageUrl} like={d.like} comment={d.comment} height={d.height}></Postpage>
}})}

     </div>
     </div>
     
     
    
    </>
        
  )  


}