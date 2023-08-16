import React, { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { getDatabase,ref,set,get,child } from "firebase/database";

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
      const username=event.target.username.value;
      const email=event.target.email.value;
      const password=event.target.pass.value;
     setName(fname+" "+lname)
      const db = getDatabase();
      set(ref(db, `users/${username}`), {
       name:fname+" "+ lname,
       username:username,
       email:email,
       password:password,
      
      })
      .then(()=>{
        alert("successful Register");
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
    {userpage?<>fuihefuihfuih</>:

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
        <input type="email" className="form-control" name="email" placeholder="Email address"/>
        <br></br>
           <input type="password" className="form-control" name="pass"  placeholder="Password"/>
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