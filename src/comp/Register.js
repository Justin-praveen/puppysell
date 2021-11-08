import "./Register.css";
import {useForm} from "react-hook-form";
import {useState} from "react";
import auth from '../Firebase';
import {createUserWithEmailAndPassword} from "firebase/auth";
import {useDispatch} from "react-redux"
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


const Register = () => {

    
    const {register,handleSubmit} = useForm();
    const dispatch = useDispatch();
    const[hu,sethu]=useState(null);
    const[hu1,sethu1]=useState(null);
   

    const sig = async(dat)=>{
      await createUserWithEmailAndPassword(auth,hu.names,hu1.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        dispatch({
          type : "loged",
          users : user.email
      })
      alert("SUCCESFULY CREATED !!!");
        // ...
      })
      .catch((error) => {
        ;
        const errorMessage = error.message;
        console.log(errorMessage);
        alert(errorMessage)
        // ..
      });
    }

   
 
    return (
      <>
      <div id="june">


         
          <div id="l1">

         
         
          <FormControl id="f1" sx={{ m: 1, width: '25ch' }} variant="outlined" onSubmit={handleSubmit(sig)}>
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
         
           <Button type="submit" onClick={sig} variant="contained"><Link to="/" id="l">sign up</Link></Button>
              
              <p>Already have account<Link to="/">Login?</Link> </p>
        
        </FormControl>
          </div>
          
        
      </div>
      </>
    )
}

export default Register
