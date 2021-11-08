import { useState } from "react";
import { Form,Container,FloatingLabel } from "react-bootstrap";
import { dbs } from "../Firebase";
import "./sell.css";

import Button from '@mui/material/Button';

import {getStorage, ref,uploadBytes,getDownloadURL} from "firebase/storage";
import {useForm} from "react-hook-form";

const Sell = () => {


    const {register,handleSubmit} = useForm();
    
    const[datas,setdatas] = useState(null);
    const[data1,setdata1] = useState(null);
    
    const sub = async(data)=>{

        setdatas(data);
        const stores = getStorage();
        const da = ref(stores,data1.name);
        await uploadBytes(da,data1);
       const urls = await getDownloadURL(da);
       alert("added successfuly!!!")
        console.log(urls);

        await dbs.collection("puppy3").add({
            names  : data.name,
            age : data.age,
            price : data.price,
            about : data.About,
            url : urls
        }).then((data)=>{
            console.log("creared")
        }).catch((er)=>{
            console.log("not updated");

        })


    }
    
    if(datas!==null){
        console.log(datas.name)
    }else{
        console.log("yet");
    }


    return (
        <>
        <div id="fs">
            <Container id="mon">
                <div id="mono">  <div id="mon1" >
                              <Form onSubmit={handleSubmit(sub)} id="forms">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label wh="wh">Name</Form.Label>
    <Form.Control type="text" placeholder="Name" {...register("name")} />
    <Form.Text className="text-muted">
      pet name
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label class="wh">age</Form.Label>
    <Form.Control type="number" placeholder="Age" {...register("age") }/>
  </Form.Group>
   <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label class="wh">Price</Form.Label>
    <Form.Control type="number" placeholder="Price" {...register("price") }/>
  </Form.Group>
  <FloatingLabel controlId="floatingTextarea2" label="About puppy">
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px' }}
      {...register("About")}

    />
  </FloatingLabel>

 
  <Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Puppy image</Form.Label>
    <Form.Control type="file"  onChange={(e)=>setdata1(e.target.files[0])}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" class="wh" />
  </Form.Group>
  <Button  type="submit" color="success" >submit
  
  </Button>
</Form>  
                </div></div>
              
     
            </Container>
        </div>

        
       
           
        </>
        
    )
}

export default Sell
