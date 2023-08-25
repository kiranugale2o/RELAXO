import React,{useState} from 'react';
import './leftnavbar.css';
import RightNavbar from './RightNavbar';
import Postpage from '../PostHandle/Postpage';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
export default function LeftNavbar(){
const[hcolor,setHcolor]=useState("aquamarine");
const[ecolor,setEcolor]=useState("");
const[scolor,setScolor]=useState("");
const[pcolor,setPcolor]=useState("");
const[rcolor,setRcolor]=useState("");

    return(
        <>
        
           <div className='rightbar border ' id='bar'>
            <div className='topbar'>
            <div className='h1 p-4' id='logo' style={{backgroundColor:"aliceblue",color:"aquamarine"}}>Relaxo  </div>
           
            </div>
               <div className='buttons' style={{background:"black"}} onClick={()=>{setHcolor("aquamarine");setEcolor("");setPcolor("");setScolor("")}}>
              
            
 <Link to="/" id="nlink"  style={{backgroundColor:`${hcolor}`}} >
 <svg xmlns="http://www.w3.org/2000/svg" id='icon' width="25" height="26" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>
</svg>
<button className='btn '  id='nbtn'  >Home</button>
</Link>
            </div>
            <div className='buttons' id='search-m' onClick={()=>{setHcolor(""); setEcolor("");setPcolor("");setScolor("")}}>
              <Link to="search" id="nlink"  style={{backgroundColor:`${scolor}`}}>
            <svg xmlns="http://www.w3.org/2000/svg" id='icon' width="25" height="26" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
<button className='btn'  id='nbtn'>Search</button>
</Link>
            </div>
            <div className='buttons' onClick={()=>{setHcolor("");setEcolor("aquamarine");setPcolor("");setScolor("");setRcolor("")}}>
               <Link to="explore" id="nlink"  style={{backgroundColor:`${ecolor}`}}>
            <svg xmlns="http://www.w3.org/2000/svg" id='icon' width="25" height="26" fill="currentColor" class="bi bi-file-play-fill" viewBox="0 0 16 16">
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 5.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43V5.884z"/>
</svg>
<button className='btn '  id='nbtn'>Explore</button>
</Link>
            </div>
            <div className='buttons' onClick={()=>{setHcolor("");setEcolor("");setPcolor("");setScolor("aquamarine");setRcolor("")}}>
               <Link to="saved" id="nlink"  style={{backgroundColor:`${scolor}`}}>
            <svg xmlns="http://www.w3.org/2000/svg" id='icon' width="25" height="26" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
</svg>
<button className='btn'  id='nbtn'>Saved</button>
</Link>
            </div>
            <div className='buttons' onClick={()=>{setHcolor("");setEcolor("");setPcolor("aquamarine");setScolor("");setRcolor("")}}>
              <Link to="/profile" id="nlink"  style={{backgroundColor:`${pcolor}`}}>
            <svg xmlns="http://www.w3.org/2000/svg" id='icon' width="25" height="26" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
<button className='btn '  id='nbtn'>Profile</button>
</Link>
            </div>
            <div className='buttons' id='log' >
              <Link to="/register" id="nlink"  style={{}}>
            <svg xmlns="http://www.w3.org/2000/svg" id='icon' width="25" height="26" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
<button className='btn '  id='nbtn'>LogOut</button>
</Link>
            </div>
            

          

           </div>
        </>
    );
}