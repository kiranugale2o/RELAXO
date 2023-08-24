import React from "react"; 
import Savepost from "../Relaxobackend/Savepost";
import PostData from "../Relaxobackend/PostData";


export default function Saved(){
    var i;
    let data=[{}];
    for( i=0;i<PostData.length-1;i++){
        if((PostData[i].username)===(Savepost[i].username)){
           
        }
        data=PostData;
    }
    
    
    return (
<>
{data}

</>
    );
}