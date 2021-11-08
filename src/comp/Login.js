import "./Login.css";
import {useForm} from "react-hook-form";
import {useState} from "react"
import auth from '../Firebase';
import {signInWithEmailAndPassword} from "firebase/auth";
import {useDispatch} from "react-redux"
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


const Login = () => {

    
    const {register,handleSubmit} = useForm();
    const dispatch = useDispatch();
    const[hu,sethu]=useState(null);
    const[hu1,sethu1]=useState(null);
   

    const sig = async(dat)=>{
       await signInWithEmailAndPassword(auth,hu.names,hu1.password).then((cre)=>{
            const users = cre.user;
            console.log(users.email);
            dispatch({
                type : "loged",
                users : users.email
            })
        }).catch((error)=>{
            const er = error.message;
            console.log(er);
            alert(er);
            
            console.log(dat.password1)

        })
    }

   
 
    return (
      <>
      < div id="june1">
          


         
          <div id="l1">

         
         
         
          <FormControl id="f11" sx={{ m: 1, width: '25ch' }} variant="outlined" onSubmit={handleSubmit(sig)}>

          
<Stack id="s">

<Avatar id="s1" src="/broken-image.jpg" />
</Stack>

<div id="f3">
    
    <div id="un"><TextField
          id="outlined-password-input"
          label="Username"
          type="Username"
          autoComplete="current-password"
        {...register("name1")}
        name="names"
        onChange={(e)=>sethu({names:e.target.value})}
     

        /></div>
<div id="pa">
    <TextField
          id="outlined-password-input"
          label="password"
          type="password"
          autoComplete="current-password"
          {...register("password1")}
          onChange={(e)=>sethu1({password:e.target.value})}
          name="password"
        

        />
</div>

</div>
         
           <Button type="submit" onClick={sig} variant="contained">Login</Button>
              
              <p>Don't have a account <Link to="/reg">signup?</Link> </p>
        
        </FormControl>
        
          </div>
          
        
      </div>
      </>
    )
}

export default Login
