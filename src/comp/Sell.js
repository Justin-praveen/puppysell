import { useState } from "react";
import { Button } from "react-bootstrap";
import { dbs } from "../Firebase";

import {getStorage, ref,uploadBytes,getDownloadURL} from "firebase/storage";




import {useForm} from "react-hook-form";

const Sell = () => {

    let urls = null;

    const {register,handleSubmit} = useForm();

    const[datas,setdatas] = useState(null);
    const[data1,setdata1] = useState(null);
    
    const sub = async(data)=>{
        setdatas(data);
        await dbs.collection("puppy1").add({
            names  : data.name,
            age : data.age,
            price : data.price,
            url : urls
        }).then((data)=>{
            console.log("creared")
        }).catch((er)=>{
            console.log("not updated");

        })


    }
    const img = async(e)=>{
        e.preventDefault();
        const stores = getStorage()
        const da = ref(stores,data1.name);
        await uploadBytes(da,data1);
        urls = await getDownloadURL(da);
        console.log(urls);
        console.log(data1);
    }

    if(datas!==null){
        console.log(datas.name)
    }else{
        console.log("yet");
    }


    return (
        <>
        <div>
            <form onSubmit={handleSubmit(sub)} >
                <input {...register("name")} id="n1"/>
                <input {...register("age")} id="n2"/>
                <input {...register("price")} id="n3"/>
                <Button type="submit">click</Button>
          </form>
        </div>

        <div>
            <form onSubmit={img}>
               <input type="file" name="imgs" onChange={(e)=>setdata1(e.target.files[0])}/> 
               <Button type="submit">submit</Button>
            </form>
            
        </div>
        </>
        
    )
}

export default Sell
