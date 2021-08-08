import React, { useState,} from  "react";

function Submit  (){

    const [users, setusers]  = useState(null);

    const red=(e)=>{
        const a = e.target.value;
        const b  = e.target.name;

        setusers({
            ...users,[b]:a
        })
        
    }

    const sub = (e)=>{
        e.preventDefault();
        console.log(users);

    }

   
    return(
        <form onSubmit={sub}> 
            <input name = "uname" onChange={(e)=>red(e)}/>
            <input name = "email" onChange={(e)=>red(e)}/>
            <button type="submit">submit</button>
        </form>

    )
}

export default Submit;
