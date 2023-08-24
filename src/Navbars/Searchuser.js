import React,{useState} from 'react';
import './searchuser.css'
import Userdata from '../Relaxobackend/Userdata';
import Profile from '../Component/Profile';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
export default function Searchuser(props){
 const [follow,setFollow]=useState("Follow");
   const[page,setPage]=useState(false);
   const[divshow,setdivshow]=useState("block")
   const[showornot,setShow]=useState("none");
    const sendData=()=>{
      setPage(true);
 setShow("block");
 setdivshow("none")
     }
     const followHandler=()=>{
      if(follow==="Follow"){
        setFollow("Following");
        toast.success("Follow By@"+props.username,{
          position: toast.POSITION.BOTTOM_RIGHT,
          width:"100%",
          height:"40px"
        });
       
      }else{
        setFollow("Follow");
        toast.error("UnFollow By@"+props.username,{
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
     }
     console.log(props.posts);
    return(
    
      <Router>
       
       
           

       { page?
    
<Profile key={props.id}  posts={props.posts} name={props.name} userback={props.userback} userlink={props.userlink} following={props.following} followers={props.followers} userjoin={props.userjoin}  username={props.username} profileImg={props.userImg} userbio={props.userbio} ></Profile>
: 
<div className='search-box  border' style={{display:`${divshow}`}} >
        <div className="card-box" style={{width:"100%",margin:"auto",padding:"auto"}}>
  <div className="list-group list-group-flush">
  
 
    <div className="list-group-item" style={{display:"flex"}}>
    <Link to={`${props.username}`} onClick={sendData} style={{display:"flex"}} id="link">
        <img src={props.userImg}  style={{width:"23%",margin:"0px",height:"90%",borderRadius:"50%"}}/>
        
          <div  style={{margin:"0px 10px",width:"60%",display:"block",background:"none"}}>
            <h7 style={{width:"100%",background:"none"}}>{props.name}</h7>
            <p style={{background:"none"}}>{props.username}</p>
            
          </div>
          </Link> 
          <button type="button" className="btn btn-primary" style={{margin:"auto",width:"40%",height:"35px"}} onClick={followHandler} >{follow}</button>
    </div>
   
  </div>
</div>
</div>
}

       
        </Router>
     
    );
}