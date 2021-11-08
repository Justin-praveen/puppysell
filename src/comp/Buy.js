
import {useState} from 'react';
import {dbs} from "../Firebase";
import * as React from 'react';

import {Container,Button} from "react-bootstrap";
import "./Buy.css";
import AttachMoneyTwoToneIcon from '@mui/icons-material/AttachMoneyTwoTone';

const al =()=>{
    alert("ph : +916382412088")
}

const Buy = () => {

    const [datas,setdatas] = useState(null);
  

    if(datas!==null){
        console.log("not yet")
    }else{
        dbs.collection("puppy3").onSnapshot((snap)=>setdatas(snap.docs.map((dd)=>({na:dd.data()}))))
    }

   
    return (
        <>
        <div class="bccc">
     {datas!==null && datas.map((du,ind)=> {
         return(
           <Container id="bcc">
               <div id="bc">
                   <div>
                       <img id="imi"src={du.na.url} alt="puppy"/>
                   </div>
                       <div>
                           <h1  id="hy">{du.na.names}</h1>
                           <p id="hy1">{du.na.about}Lorem Ipsum is simply
                                dummy text of the print
                                ing and typesetting industry. </p>
                                <div><AttachMoneyTwoToneIcon/> <h1>{du.na.price}</h1></div>
                                <Button onClick={al}>BUY</Button>
                       </div>
               
    </div>
           </Container>
         )
     })}

        </div>
        </>
    )
}

export default Buy
