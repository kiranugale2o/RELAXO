import React ,{useState,useEffect}from 'react';
import PostData from '../Relaxobackend/PostData';
import Userdata from '../Relaxobackend/Userdata';
import Searchuser from './Searchuser';
export default function RightNavbar(){

    const [postdata,setdata]=useState([]);
    useEffect(()=>{
        setdata(Userdata);
    },[]);

      let user;
      user=postdata.map((d)=>{
        return <Searchuser name={d.name} username={d.username} userlink={d.userLink} userbio={d.userBio} userjoin={d.userJoin} userImg={d.userImage} userback={d.userBackground}  followers={d.followers} following={d.following}></Searchuser>
      })
    return(
<>
{user}
</>
    );

}