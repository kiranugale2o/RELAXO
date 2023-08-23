import React,{useState} from "react";
import './postpage.css';
import CreatePost from "../Component/CreatePost";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export default function Postpage(props){
const[show ,setShow]=useState("none");
const[followBtn,setfollowBtn]=useState("Follow");
const [colorN,setcolor]=useState("black");
const [like,setLike]=useState(props.like);


const alertBtn=()=> {
   if(followBtn==="Follow"){
    toast.success("Follow By@"+props.username,{
      position: toast.POSITION.BOTTOM_RIGHT,
      width:"100%",
      height:"40px"
    });
   }else{
    toast.error("UnFollow By@"+props.username,{
      position: toast.POSITION.BOTTOM_RIGHT,
      width:"100%",
      height:"40px"
    });
   }
  
}

    return(

        <>
        
  
<div className="card shadow-none p-1 mb-5 3 bg-body-white rounded" style={{ width: "90%" ,position:"none",margin:"auto 10%"}}>
  <div className="card-body" style={{width:"100%"}} >
  <div className="card-nav" style={{display:"flex"}}>
        <img src={props.userImage}    style={{width:"14%" ,height:"60px",borderRadius:"50%" ,borderStyle:"none" ,borderColor:"black"}} ></img>
   <div className="card-info" style={{display:"block",margin:"auto"}}>
 
    <h5 className="card-title" style={{width:"70%"}}>{props.name}</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">{props.username}</h6>
    <button type="button " id="liveAlertBtn" className="btn btn-primary" style={{ display:`${show}` , width:"20%" ,position:"absolute",top:"16%", left:"70%"}}  onClick={()=>{     if(followBtn==="Follow"){ setfollowBtn("Following"); ;setShow("none")}else{setfollowBtn("Follow");setShow("none")} alertBtn();}}>{followBtn}</button>
    <ToastContainer />
    </div>
    <div className="follow-btn"  style={{position:"relative",width:" 50px",height:"20px" ,right:"0px",backgroundColor:"white" }}>
    <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>{if(show==="none"){ setShow("block"); } else {setShow("none");}}} style={{width:"20px" ,height:"20px",background:"none"}} fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg>
   </div>
    </div>
    <p className="card-text">
   {props.post}
    </p>
    

    <div className="card">
    <img src={props.postImg}  style={{height:`${props.height}px`}} className="card-img-top" alt="" />
    <video className="video-container video-container-overlay" style={{display:`${props.vishow}`,width:"400px",height:"200px"}}  controls data-reactid=".0.1.0.0">
<source type="video/mp4" data-reactid=".0.1.0.0.0" src={props.myvideo}></source>
</video>
      </div>
      
    
 
 
  </div>
  <div class="card-footer" style={{backgroundColor:"white",width:"100%"}}>
    <div className="social-icon" style={{width:"90%",height:"20px",display:"flex",backgroundColor:"white"}} >
        <div className="each-icon" style={{display :"flex" }}>
        <svg xmlns="http://www.w3.org/2000/svg"  style={{color:`${colorN}` }} onClick={()=>{ if(colorN==="red"){ setcolor("black");setLike(like-1)  }else{setcolor("red"); setLike(like+1)}}} width="18" height="18" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>
<p style={{margin:"-5px -17px"}} >{like}</p>
</div>
<div className="each-icon" style={{display :"flex"}}>
     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chat-left-dots-fill" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>
<p style={{margin:"-5px -17px"}} >{props.comment}</p>
</div>
<div className="each-icon" style={{display :"flex"}}>
     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-bookmark-plus" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z"/>
</svg>
<p style={{margin:"-5px -17px"}} ></p>
</div>
<div className="each-icon" style={{display :"flex"}}>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
</svg></div>
<p style={{margin:"-5px -17px"}} ></p>
     </div>
    </div>
</div>


        
                    
        </>
    )
}