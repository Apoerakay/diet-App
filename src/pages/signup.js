import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


import Form from "../components/form";


function Signup (){
const [email, setEmail] = useState("")
const [userName, setUsername] = useState("")
const [Password, setPassword] = useState("")

const navigate = useNavigate()
const addUser = (e)=> {
    e.preventDefault();
    const userData= {
        email: email,
        userName: userName,
        password: Password
    }

    const url = "http//localhost:8000/api/signup"
    console.log(userData)
    const data =axios.post(url,{
        body:userData
    }).then((res)=>{
        navigate("/");
        console.log(res);    
})

}

    
    return(
        <>
        



<section>


</section>

 <Form/> 
        </>
    )
}


export default Signup