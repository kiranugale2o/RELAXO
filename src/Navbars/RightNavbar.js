import React ,{useState,useEffect}from 'react';
import './rightnav.css';
import { BsSearch } from 'react-icons/bs';
import Userdata from '../Relaxobackend/Userdata';
import Searchuser from './Searchuser';
export default function RightNavbar(){

    const [postdata,setdata]=useState([]);
    const[message,setMessage]=useState(false);
    useEffect(()=>{
      setdata(Userdata.slice(3,6))
    },[])
let user=[];
 function searchHandler(v) {
  if (v === "") { setdata(Userdata); return; }
  const filterBySearch = Userdata.filter((item) => {
      if (item.name.toLowerCase()
          .includes(v.toLowerCase())) { return item; }
  })

  if(filterBySearch.length===0){
   setMessage(true);
  }else{
    setMessage(false);
  setdata(filterBySearch);
  }
}
     
    let result;
    result=postdata.map((d)=>{
      return <Searchuser key={d.id}  posts={d.posts} id={d.id} name={d.name} username={d.username} userImg={d.userImage} userback={d.userBackground} userbio={d.userBio} userlink={d.userLink} userjoin={d.userJoin} following={d.following} followers={d.followers} ></Searchuser>
      
    })
    return(
<>
<div className='search-area'>
  <div className='search'>
   <input className='form-control' placeholder={`Search User`} type='text' onChange={
    (e)=>{searchHandler(e.target.value)}
   } id='mysearch'></input>
  
  </div>
  <div  className='search-result  '>
  
 { message?<div className='p-3' style={{background:"none",backgroundColor:"aliceblue",fontSize:"larger"}}> User Not Found! </div> :<>{result}</> }
 
</div>
</div>

</>
    );

}