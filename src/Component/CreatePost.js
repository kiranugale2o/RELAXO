import React, { useState } from "react";
 
import './createpost.css';
import Picker from 'emoji-picker-react';
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes,getDownloadURL } from "firebase/storage";
import { StaticRouter } from "react-router-dom/cjs/react-router-dom";
import userEvent from "@testing-library/user-event";
//import Emoji from "./Emoji";
// Initialize Firebase
//initializeApp(firebaseConfig)

// Create a root reference
const storage = getStorage();

let data={};
function Emoji(props) {
	const[chosenEmoji, setChosenEmoji] = useState(null);

	const onEmojiClick = (event, emojiObject) => {
		setChosenEmoji(event);
    
		data=event.emoji;
	};

	return (
		<div>
			
			{chosenEmoji ? (
				<span>Your Emoji: {chosenEmoji.emoji}</span>
			) : (
				<span>No Emoji</span>
			)}
			<Picker onEmojiClick={onEmojiClick} />
		</div>
	);
};

export default function CreatePost(){

  const[userVal,setVal]=useState(data);

  const setEmoji=()=>{

  }
   const[postImg,setPostImg]=useState(null);
   const[postVideo,setPostVideo]=useState(null);
   
  const[showemoji,setShowemoji]=useState("none");
  const sendImg=(event)=>{
    const iname=event.target.files[0];
    const mountainsRef = ref(storage,`postimg/${iname.name}` );

// Create a reference to 'images/mountains.jpg'
const mountainImagesRef = ref(storage, `postimg/${iname}`);
 uploadBytes(mountainsRef,iname).then(()=>{
  getDownloadURL(ref(storage, `postimg/${iname.name}`)).then((url)=>{
   setPostImg(url);
  })
 })
  }


   
    return(
<>


<div class="card w-100 mb-4" id="create-card">
  <div class="card-body" style={{height:"auto"}}>
    <div className="input-part" style={{display:"flex"}}>
  <div class="user-img" style={{width:"10%",height:"50px"}}>
    <img  style={{width:"100%",height:"100%",borderRadius:"50%"}}src="https://firebasestorage.googleapis.com/v0/b/relaxo-social.appspot.com/o/backend-images%2Friya.jpeg?alt=media&token=ee158449-4c07-4f81-ad9d-604070330ea7" alt="user"></img>
     </div>
<div className="post-data">
  <span>{userVal}</span>
  <textarea class="form-control"  id="exampleFormControlTextarea1" style={{borderStyle:"none"}} rows="3"></textarea>
  <img src={postImg}></img>
   </div>
   </div>
     <div className="send-data" style={{display:"flex",width:"30%"}}>
      <div className="img-with-icon" style={{display:"flex"}}><label htmlFor="inimg">
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-images" viewBox="0 0 16 16">
  <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
  <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"/>
</svg>
</label>
<input type="file" name="" style={{display:"none"}} onChange={sendImg} id="inimg"></input>

</div>
<div className="video-with-icon" style={{display:"flex"}}>
  <label htmlFor="inv">
<svg  xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-file-earmark-play-fill" viewBox="0 0 16 16">
  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM6 6.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43V6.884z"/>

</svg>
</label>
<input type="file" name="" style={{display:"none"}} id="inv"></input>
</div>
<div className="emoji-with-emoji">
  
  <label htmlFor="inem">
<svg  onClick={()=>{if(showemoji==="none"){setShowemoji("block")}else{setShowemoji("none")}}} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-emoji-heart-eyes" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M11.315 10.014a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434z"/>
</svg>
</label>
  <div className="" id="inem" style={{display:`${showemoji}`,width:"50%" ,position:"fixed",top:"40%",left:"30%"}}><Emoji setemoji={setVal}/></div>
</div>
    </div>
    <div className="btn btn-primary" id="postbtn">post</div>
  </div>
</div>
</>
    );
}