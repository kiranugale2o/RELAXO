import React ,{useState,useEffect}from 'react';
import PostData from '../Relaxobackend/PostData';
import Searchuser from './Searchuser';
export default function Navbar(){

    const [postdata,setdata]=useState([]);
    useEffect(()=>{
        setdata(PostData);
    },[]);

      let user;
      user=postdata.map((d)=>{
        return <Searchuser name={d.name} username={d.username} userImg={d.userImage} id={d.id} ></Searchuser>
      })
    return(
<>
{user}
</>
    );

}