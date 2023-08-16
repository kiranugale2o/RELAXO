import React, {useState} from "react";
import './singup.css';


import { Link } from "react-router-dom/cjs/react-router-dom";
import { getDatabase, ref, child, get } from "firebase/database";



import { initializeApp } from "firebase/app";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCNuaXI45NhX6jwb01xtfEDguKJiBkeWY4",
  authDomain: "relaxo-social.firebaseapp.com",
  projectId: "relaxo-social",
  storageBucket: "relaxo-social.appspot.com",
  messagingSenderId: "919379973745",
  appId: "1:919379973745:web:74c233ac9df6badf706dd0"
};

initializeApp(firebaseConfig);





export default function Login(){
const [name,setName]=useState(null);
const [email, setEmail]=useState(null);
const [userpage,setPage]=useState(false);
  const login=(event)=>{
    event.preventDefault();
    const username=event.target.username.value;
    const dbRef = ref(getDatabase());
get(child(dbRef, `users/${username}`)).then((snapshot) => {
  if (snapshot.exists()) {
    const data=snapshot.val();
    console.log(snapshot.val());
    setPage(true);
setName(data.name);
setEmail(data.email);

  }else{
    alert("SORRY YOU ARE NOT USER OF RELAXO . SO PLEASE  CREATE YOUR ACCAOUNT IN RELAXO ")
  }
}) .catch((error) => {
  alert(error);
  console.error(error);
});
  }


  const loginHandler=(event)=>{

    const username=event.target.username.value;
    const password=event.target.password.value;
    const auth = getAuth();
signInWithEmailAndPassword(auth, username, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    alert("successful login");
  })
  .catch((error) => {
    alert("unc");
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }

 console.log( );

    return(
<>
{userpage ? <>login </>:
<div className="container   border border-secondary" id="singup-form">
          <form className="form" onSubmit={login} style={{width:"100%"}}>
            <h3 className="text-center" style={{height:"50px",backgroundColor:"white"}}>Login</h3>
          
           <br></br>
           
        <input type="text" className="form-control" name="username" placeholder="Email address"/>
        <br></br>
           <input type="password" className="form-control" name="password" placeholder="Password"/>
<br></br>
        
           <button type="submit" style={{width:"100%",margin:"auto"}} id="btn" className="btn btn-primary">Login</button>
          
        <br></br>
       <br></br>
          <Link to="/singup" style={{fontSize:"18px",width:"30%",margin:"auto 40px",backgroundColor:"white"}}  className="text-center"  >Create New Account{">"}</Link>
         <hr></hr>
         <button type="button" style={{width:"100%",margin:"auto"}} id="btn" className="btn btn-primary">Login as Guest</button>
         <br></br>
         <br></br>
          <button type="button" style={{width:"100%",margin:"auto"}} id="btn" className="btn btn-primary">Login as Google</button>
       
          </form>
          
        </div>
}

</>
    );
}