import React,{useState} from 'react';
import './searchuser.css'
import Userdata from '../Relaxobackend/Userdata';
import Profile from '../Component/Profile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default function Searchuser(props){
 const [follow,setFollow]=useState("Follow");
   const[page,setPage]=useState(false);
    const sendData=()=>{
      setPage(true);

     }
     const followHandler=()=>{
      if(follow==="Follow"){
        setFollow("Following");
      }else{
        setFollow("Follow");
      }
     }
    return(
      <Router>
       
       
           
<Switch>

<Route  path={`/profile`}>
  <Profile name={props.name} userback={props.userback} userlink={props.userlink} following={props.following} followers={props.followers} userjoin={props.userjoin}  username={props.username} profileImg={props.userImg} userbio={props.userbio} ></Profile>
</Route>
<Route path="/">
<div className='search-box border' onClick={sendData}>
        <div className="caed-box" style={{width:"100%",margin:"auto",padding:"auto"}}>
  <div className="list-group list-group-flush">
  
 
    <div className="list-group-item" style={{display:"flex"}}>
    <Link to={`profile/${props.username}`} style={{display:"flex"}} id="link">
        <img src={props.userImg}  style={{width:"20%",margin:"0px",height:"60px",borderRadius:"50%"}}/>
        
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

</Route>
</Switch>
       
        </Router>
    );
}