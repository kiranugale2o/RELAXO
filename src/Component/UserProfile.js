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
import { initializeApp } from "firebase/app";
import { getStorage,ref,uploadBytes,getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCNuaXI45NhX6jwb01xtfEDguKJiBkeWY4",
  authDomain: "relaxo-social.firebaseapp.com",
  projectId: "relaxo-social",
  storageBucket: "relaxo-social.appspot.com",
  messagingSenderId: "919379973745",
  appId: "1:919379973745:web:74c233ac9df6badf706dd0"
};
// Initialize Firebase
initializeApp(firebaseConfig)

// Create a root reference
const storage = getStorage();

export default function UserProfile(props){
  const ud=Profiledata[0];
           const [followBtn,setBtn]=useState("Follow");
           const[userback,setBack]=useState(ud.userback);
           const[username,setUsername]=useState(ud.username);
           const[name,setName]=useState(ud.name);
           const[link,setLink]=useState(ud.link);
           const[profileImg,setProfileImg]=useState(ud.profileImg);
           const[join,setJoin]=useState(ud.userjoin);
           const[bio,setBio]=useState(ud.userbio);
           const[ufollowing,setUFollowing]=useState(ud.following);
           const[follow,setFollowing]=useState(ud.followers);
           const[show,setShow]=useState("none");
           const[ebar,setEbar]=useState("none");
           const btnHandler=()=>{
             
              setEbar("block")
              
           }

           const setProfileback=(event)=>{
            
            const  iname=event.target.files[0];
           
            const mountainsRef = ref(storage,`postimg/${iname.name}` );
        
        // Create a reference to 'images/mountains.jpg'
        const mountainImagesRef = ref(storage, `postimg/${iname}`);
         uploadBytes(mountainsRef,iname).then(()=>{
          getDownloadURL(ref(storage, `postimg/${iname.name}`)).then((url)=>{
          setBack(url);
          })
          
         })
          }

          const setProfileDP=(event)=>{
            
            const  iname=event.target.files[0];
           
            const mountainsRef = ref(storage,`postimg/${iname.name}` );
        
        // Create a reference to 'images/mountains.jpg'
        const mountainImagesRef = ref(storage, `postimg/${iname}`);
         uploadBytes(mountainsRef,iname).then(()=>{
          getDownloadURL(ref(storage, `postimg/${iname.name}`)).then((url)=>{
          setProfileImg(url);
          })
          
         })
          }
           const editHandler=(e)=>{
           
            e.preventDefault();
             setName(e.target.fname.value+"  "+e.target.lname.value);
             setBio(e.target.bio.value);
             setLink(e.target.link.value);
             setEbar("none");
             toast.success("successfully Update Profile ")
           }
         


        return(
    <>
    <div className="userfixprofile" >
     <div className="profile border">
        <div className="backimg">
        <img src={userback}  style={{height:"100%",width:"100%",margin:" 20px auto"}} id="backi" ></img>
        </div>
        <div className="userimg" >
            <img src={profileImg} style={{width:"100%", borderRadius:"50%",height:"100px"}}  >
            </img>
           
        </div>
        <button id="follow" className="btn border" onClick={btnHandler} >Edit</button><ToastContainer></ToastContainer>
                 <div className="userinfo-profile">
            <p id="name">{name}</p>
            <p id="uname">{username}</p>
          </div>
            
<div className="bio h6">{bio}</div>
<div className="link "><a style={{background:"none"}} href={props.userlink}>{link}</a></div>   
<div className="join">
<svg xmlns="http://www.w3.org/2000/svg" style={{width:"10%",fontSize:"larger",background:"none",margin:"5px 0px"}} width="16" height="16" fill="currentColor" class="bi bi-calendar-check-fill" viewBox="0 0 16 16">
  <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
</svg>
<p style={{background:"none"}}>{join}</p>
</div>

<div className="action" style={{display:"flex",width:"80%",margin:"auto"}}>
    <p id="p-6" className="h6">Posts 0</p>
    <p id="p-6" className="h6">Followers {follow}</p>
    <p id="p-6" className="h6">Following  {ufollowing}</p>
</div>
     </div>
   
 <br></br>
     <div className="user-profiles">
  { PostData.map((d)=>{
    if(d.username===ud.username){
     return <Postpage key={d.id} vishow={d.vishow}  name={d.name} username={d.username} userImage={d.userImage} post={d.post} postImg={d.imageUrl} like={d.like} comment={d.comment} height={d.height}></Postpage>
}})}

     </div>
     </div>
     

     <div className="edit-part " style={{display:`${ebar}`}} >
     <div className="container   border border-secondary  " >
    
          <form className="form" style={{width:"100%"}} onSubmit={editHandler}> 
          <div className="text-end" onClick={()=>{setEbar("none")}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
</svg>
          </div>
          
            <h3 className="text-center " style={{height:"50px",backgroundColor:"white"}}>Edit Profile</h3>
            <div className="backimg">
              <div className="imgback-input-icon" style={{position:"absolute",right:"10%" ,margin:"10px 0px",width:"10%",background:"white",borderRadius:"30%"}}>
             <label htmlFor="backin">
              <svg xmlns="http://www.w3.org/2000/svg"  width="26" height="26" style={{background:"none"}} fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16">
  <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
  <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
</svg></label><input type="file" name="back" id="backin"  onChange={setProfileback} style={{width:"1px",display:"none"}}/>
     
                       </div>
                       
        <img src={userback}  style={{height:"100%",width:"100%",margin:" 0px auto"}} id="backi" ></img>
        <label htmlFor="dpin">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" id="dpicon" style={{background:"none"}} fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16">
  <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
  <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
</svg></label><input type="file" name="" id="dpin"  onChange={setProfileDP} style={{width:"1px",display:"none"}}/>
     
        </div>
        <div className="userimg"  style={{margin:"-10% 0px",height:"100px"}}>
            <img src={profileImg} style={{width:"100%", borderRadius:"50%",height:"80px",margin:"0% 0px"}}  >
            </img>
           
        </div>
         
           <br></br> 
             <div className="user-name" style={{display:"flex"
          ,width:"100%",backgroundColor:"white"}}>
            <input type="text" className="form-control" required   name="fname" placeholder=" first Name" />
            <input type="text" className="form-control" required name="lname"  placeholder="Last Name"/>
           </div>
           <br></br>
          
           <div style={{display:"flex"}}>
          
               </div>
<br></br>
        <input type="text" className="form-control" name="bio" placeholder="Enter Bio "/>
       <br></br>
       <input type=" text" className="form-control" name="link"  placeholder="Enter your Business link "/>

           <br></br>
           <button type="submit" style={{width:"100%",margin:"auto"}}className="btn btn-primary"  id="btn">Update</button>
           <br></br> <br></br>
      
      </form>
     
     </div>
     </div>
    
    </>
        
  )  


}