import React,{useState} from 'react';
import './searchuser.css'
import Userdata from '../Relaxobackend/Userdata';
import Profile from '../Component/Profile';
export default function Searchuser(props){
    let id=props.id;
     
   const[page,setPage]=useState(false);
    const sendData=()=>{
   setPage(true);
     }
    return(
        <>
         <>
         {page? <><Profile userImg={ props.userImage} name={ props.name} username={ props.username}></Profile></>:
         <div className='search-box border' onClick={sendData}>
        <div className="caed-box" style={{width:"100%",margin:"auto",padding:"auto"}}>
  <div className="list-group list-group-flush">
    <div className="list-group-item" style={{display:"flex"}}>
        <img src={props.userImage}  style={{width:"20%",margin:"0px",height:"60px",borderRadius:"50%"}}/>
          <div  style={{margin:"0px 10px",width:"60%",display:"block",background:"none"}}>
            <h7 style={{width:"100%",background:"none"}}>{props.name}</h7>
            <p style={{background:"none"}}>{props.username}</p>
          </div>
          <button type="button" className="btn btn-primary" style={{margin:"auto",width:"40%",height:"35px"}} >Follow</button>
    </div>

  </div>
</div>
</div>
}
        </>
        </>
    );
}