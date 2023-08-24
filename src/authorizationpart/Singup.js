import React, { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Profiledata from "../Relaxobackend/Profiledata";
import { getDatabase,ref,set,get,child } from "firebase/database";
import Home from "../Component/Home";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { getAuth ,createUserWithEmailAndPassword} from "firebase/auth";

import './singup.css';
import { Link } from "react-router-dom/cjs/react-router-dom";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNuaXI45NhX6jwb01xtfEDguKJiBkeWY4",
  authDomain: "relaxo-social.firebaseapp.com",
  projectId: "relaxo-social",
  storageBucket: "relaxo-social.appspot.com",
  messagingSenderId: "919379973745",
  appId: "1:919379973745:web:74c233ac9df6badf706dd0"
};

initializeApp(firebaseConfig);
const db=getFirestore();

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth();

// Initialize Realtime Database and get a reference to the service
const database = getDatabase();
//google singin
const provider = new GoogleAuthProvider();



  export default function Singin(){

    const [userpage,setPage]=useState(null);
    const [username,setName]=useState("");
    const singupHandler=(event)=> {
      event.preventDefault();
      const fname=event.target.fname.value;
      const lname=event.target.lname.value;
      const link=event.target.link.value;
      const bio=event.target.bio.value;
      const username=event.target.username.value;
      const email=event.target.email.value;
      const password=event.target.pass.value;
     setName(fname+" "+lname)
      const db = getDatabase();
      set(ref(db, `users/${username}`), {
       name:fname+"  "+ lname,
       username:username,
       email:email,
       password:password,
       link:link,
       bio:bio,
      })
      .then(()=>{
        alert("successful Register");
        Profiledata.unshift({
          name:fname +""+lname,
          username:username,
          profileImg:"https://firebasestorage.googleapis.com/v0/b/relaxo-social.appspot.com/o/postimg%2Fprofiledp.jpg?alt=media&token=b0f8e52d-4592-4996-9afd-a53fda1e12b8",
          userback:"https://firebasestorage.googleapis.com/v0/b/relaxo-social.appspot.com/o/backend-images%2Friyaback.jpg?alt=media&token=2c120c28-62e5-4955-b9a4-855a2b730725",
          userbio:bio,
          userlink:link,
              followers:0,
          following:0,
          post:0,
          
        });
        setPage(true);
      })
    }
    
    


    const googleHandler=()=>{
      signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    console.log(user);
    setPage(true);
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

    }

 
    
 

    

   

    return(
        <>
    {userpage?<Home></Home>:

        <div className="container   border border-secondary  " id="singup-form">
          <form className="form"  onSubmit={singupHandler} style={{width:"100%"}}>
            <h3 className="text-center" style={{height:"50px",backgroundColor:"white"}}>Sing Up</h3>
           <div className="user-name" style={{display:"flex"
          ,width:"100%",backgroundColor:"white"}}>
            <input type="text" className="form-control" name="fname" placeholder="First Name" />
            <input type="text" className="form-control" name="lname"  placeholder="Last Name"/>
           </div>
           <br></br>
           <input type="text" className="form-control" name="username" placeholder="Username"/>
           <br></br>
           <div style={{display:"flex"}}>
           <input type="email" className="form-control" name="email" placeholder="Email address"/>
        <br></br>
        <input type="password" className="form-control" name="pass"  placeholder="Password"/>
        </div>
<br></br>
        <input type="text" className="form-control" name="bio" placeholder="Enter Bio "/>
       <br></br>
       <input type=" text" className="form-control" name="link"  placeholder="Enter your Business link "/>

           <br></br>
           <button type="submit" style={{width:"100%",margin:"auto"}}className="btn btn-primary"  id="btn">Sing UP</button>
        
        <br></br>
          <Link to="/login" style={{fontSize:"18px",width:"30%",margin:"auto 40px",backgroundColor:"white"}}  className="text-center" href="#" >Already  Have an account {">"}</Link> 
          <br></br>
          <br></br>
           <button type="button" onClick={googleHandler} style={{width:"100%",margin:"auto"}}className="btn btn-primary"  id="btn">Sing up using Google</button>
    
          </form>    
         
        
        </div>
}
             </>
    );
}