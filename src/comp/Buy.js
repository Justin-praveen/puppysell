
import {useState} from 'react';
import {dbs} from "../Firebase";

const Buy = () => {

    const [datas,setdatas] = useState(null);

    if(datas!==null){
        console.log("not yet")
    }else{
        dbs.collection("puppy1").onSnapshot((snap)=>setdatas(snap.docs.map((dd)=>({na:dd.data()}))))
    }

   
    return (
        <div>
     {datas!==null && datas.map((du,ind)=> {
         return(
             <div key={ind}>
                 <h2>{du.na.names}</h2>
                 <h2>{du.na.age}</h2>
             </div>
         )
     })}

        </div>
    )
}

export default Buy
