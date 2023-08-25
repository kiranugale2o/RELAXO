import React from "react"; 
import Savepost from "../Relaxobackend/Savepost";
import PostData from "../Relaxobackend/PostData";
import Postpage from "../PostHandle/Postpage";

export default function Saved(props){
    let data=null;
    let i=0;

    data=PostData.map((d)=>{
        for(i=0;i<Savepost.length-1;i++){
        if(d.username===Savepost[i].username){
           return <Postpage key={d.id} vishow={d.vishow}  name={d.name} username={d.username} userImage={d.userImage} post={d.post} postImg={d.imageUrl} like={d.like} comment={d.comment} height={d.height}></Postpage>
 
        }}
    })
  
 
    return (
<>
{data}

</>
    );
}