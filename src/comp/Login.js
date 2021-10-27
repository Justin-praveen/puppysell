
import {useForm} from "react-hook-form";
import auth from '../Firebase';
import {signInWithEmailAndPassword} from "firebase/auth";
import {useDispatch} from "react-redux"
import { Link } from "react-router-dom";
import Container from '@mui/material/Container';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';



const Login = () => {

    const {register,handleSubmit} = useForm();
    const dispatch = useDispatch();
   

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
  
    return (
      <>
      <Container fluid>
         
          <div>

         
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" onSubmit={handleSubmit(sig)}>
          <TextField
          id="outlined-password-input"
          label="Username"
          type="Username"
          autoComplete="current-password"
        {...register("name1")}

        />

<TextField
          id="outlined-password-input"
          label="password"
          type="password"
          autoComplete="current-password"
          {...register("password1")}
        

        />

           <Button type="submit" variant="contained">signin</Button>
              <p>Dont hae account <Link to="/reg">signup</Link> </p>
        </FormControl>
          </div>
          
        
      </Container>
      </>
    )
}

export default Login
