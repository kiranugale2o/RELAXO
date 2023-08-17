import React,{useState} from "react";
 //import Userdata from './Relaxobackend/Userdata';
 import './profile.css'
    
export default function Profile(props){
           const [followBtn,setBtn]=useState("Follow");

           const btnHandler=()=>{
              if(followBtn==="Follow"){
                setBtn("Following");
              }else{
                setBtn("Follow");
              }
           }
    
        return(
    <>
     <div className="profile border">
        <div className="backimg">
        <img  style={{height:"100%",width:"100%",margin:" 20px auto"}} id="backi" src={props.userImg} ></img>
        </div>
        <div className="userimg" >
            <img style={{width:"100%", borderRadius:"50%",height:"100px"}} src={props.userImg} >
            </img>
           
        </div>
        <button id="follow" className="btn btn-primary" onClick={btnHandler}>{followBtn}</button>
          <div className="userinfo">
            <p id="name">{props.name}</p>
            <p id="uname">{props.username}</p>
          </div>
            
<div className="bio">This is may bio</div>
<div className="link"><a style={{background:"none"}} href="#">googlr.com</a></div>   
<div className="join">
<svg xmlns="http://www.w3.org/2000/svg" style={{width:"10%",fontSize:"larger",background:"none",margin:"5px 0px"}} width="16" height="16" fill="currentColor" class="bi bi-calendar-check-fill" viewBox="0 0 16 16">
  <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
</svg>
<p style={{background:"none"}}>Joined Mar 12 2022</p>
</div>

<div className="action">
    
</div>
     </div>
    </>
        
  )  


}