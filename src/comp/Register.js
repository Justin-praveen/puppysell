
import auth from '../Firebase';
import {createUserWithEmailAndPassword} from "firebase/auth";
import {Button} from "react-bootstrap";
import {useForm} from "react-hook-form";

const Register = () => {
    
    const {register,handleSubmit} = useForm();

    
    const sub =(data)=>{
        
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




    
    return (
        <div>
            <div><form onSubmit={handleSubmit(sub)}>
              <input {...register("name")}/>
              <input {...register("password")}/>
              <Button type="submit" >signin</Button>
              
          </form></div>

        </div>
    )
}

export default Register
