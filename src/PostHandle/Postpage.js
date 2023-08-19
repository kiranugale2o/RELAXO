import React,{useState} from "react";
import './postpage.css';
export default function Postpage(){
const[show ,setShow]=useState("block");
const[followBtn,setfollowBtn]=useState("Follow");
const [alertd, setAlert]=useState("none");


const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

 alertPlaceholder.append(wrapper);
  
}

const alertBtn=()=> {
     if(followBtn==="Follow"){
    appendAlert(`Follow By$username`, 'success')
     }else{
      appendAlert(`Unfollow By$username `, 'danger ')
   
     }
}

    return(

        <>
        <div id="liveAlertPlaceholder" style={{display:`${setAlert}`}}></div>

        
        <div className="card shadow-sm p-3 mb-5 bg-body-white rounded" id="card-box">
        <div className="card-body" style={{width:"100%"}} >
            <div className="card-nav">
                <img src="https://firebasestorage.googleapis.com/v0/b/relaxo-social.appspot.com/o/backend-images%2Fjoly.jpeg?alt=media&token=cd78e033-28ab-4183-9d9a-b5e48f06b959" alt="" id="userimg"></img>
                <div className="userinfo">
                    <div className="h5">User name</div>
                    <div className="p" style={{margin:"-10px 0px"}}>@username</div>
                </div>
                  <div onClick={()=>{if(show==="none"){setShow("block");}else{setShow("none")} }} >
                <svg xmlns="http://www.w3.org/2000/svg" id="ficon" width="26" height="26" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
</svg></div> <button type="button " id="liveAlertBtn" className="btn btn-primary" style={{ display:`${show}`}}  onClick={()=>{     if(followBtn==="Follow"){ setfollowBtn("Following"); setShow("none");setAlert("none");}else{setfollowBtn("Follow");setShow("none"); } alertBtn()}}>{followBtn}</button>

            </div>
            </div>
             </div>
      
        </>
    )
}