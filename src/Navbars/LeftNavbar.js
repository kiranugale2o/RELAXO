import React,{useState} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import './leftnavbar.css';
export default function LeftNavbar(){
 const[btnc, setbtnc]=useState("aqua");
 const colorHandler=()=>{
  if(btnc==="aqua"){
    setbtnc("white");
  }
 }
  return(
<>
   <div className="leftbar">
    <div className="buttons" onClick={colorHandler} style={{background:`${btnc}`}}>
      <Link to="profile">
        <div className="btn " style={{background:`${btnc}`}}>Home</div>
      </Link>
    </div>
    <div className="buttons">
      <Link to="profile">
        <div className="btn btn-primary">Profile</div>
      </Link>
    </div>
    <div className="buttons">
      <Link to="profile">
        <div className="btn btn-primary">Profile</div>
      </Link>
    </div>
   </div>
</>
  );
}