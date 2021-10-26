import React, {useState} from 'react';
import {Container,Button} from "react-bootstrap";
import {useForm} from "react-hook-form";
import auth from '../Firebase';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";

import {useDispatch,useSelector} from "react-redux"




const Login = () => {

    const {register,handleSubmit} = useForm();
    const dispatch = useDispatch();
    const sel  = useSelector((state)=>state.datas);
    const[names,setnames] = useState(null);


    const sub =(data)=>{
        setnames(data);
        console.log("1");
        

        
        createUserWithEmailAndPassword(auth, data.name, data.password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...
          })
          .catch((error) => {
            ;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
          });

    }

    const sig = (dat)=>{
        signInWithEmailAndPassword(auth,dat.name1,dat.password1).then((cre)=>{
            const users = cre.user;
            console.log(users.email);
            dispatch({
                type : "loged",
                users : users.email
            })
            
           


        }).catch((error)=>{
            const er = error.message;
            console.log(er);

        })
    }
   

    



    if(names!== null) {
        console.log(
            `data is ${names.name}`
        )


    }else{
        console.log("data not yet ccomes!")
    }

    return (
      <>
      <Container fluid="md">
          <div><form onSubmit={handleSubmit(sub)}>
              <input {...register("name")}/>
              <input {...register("password")}/>
              <Button type="submit" >signin</Button>
              
          </form></div>

          <div>
          <form onSubmit={handleSubmit(sig)}>
              <input {...register("name1")}/>
              <input {...register("password1")}/>
              <Button type="submit" >signin</Button>
              
          </form>
          </div>
          
       

        
      </Container>
      </>
    )
}

export default Login
