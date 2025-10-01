import React, { useState } from 'react'
import '../login/Login.css'
import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


export default function Login() {
    const navigate=useNavigate()

    const [input,SetInput]=useState({
        uname:'',
        password:'',

    })

    console.log(input)

    const inputChange=(event)=>{
        const {name,value}=event.target
        SetInput({...input,[name]:value})


    }

    const submit=(e)=>{
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/api/LoginAPIView1',input).then((response)=>{
    
    
            
            
            
            localStorage.setItem('Login_id',JSON.stringify(response.data.data.login_id))
            localStorage.setItem('uname',JSON.stringify(response.data.data.uname))
            localStorage.setItem('password',JSON.stringify(response.data.data.password))
            localStorage.setItem('role',JSON.stringify(response.data.data.role))
            localStorage.setItem('userid',JSON.stringify(response.data.data.userid))
            console.log(response);
            console.log(input);
    
    
            if(response.data.data.role==='user'){
                navigate("/Donarhome")
                console.log('donar logged successfully')
            }
            else if(response.data.data.role==='user2'){
                navigate("/Home")
                console.log('receiver logged successfully')
            }
            else if(response.data.data.role==='admin'){
                navigate("/Adminhome")
                console.log('Admin logged successfully')
            }
    
    
    
        }).catch((error)=>{
            console.log(error.response.data.data);
            toast.error(error.respnse.data.data, {
    
                position: "top-center",
                autoclose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        })
        
    }



    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="square">
                <h5 className='text-center pt-5'>Welcome, Please Enter Your Details</h5>
                <h5 className=' text-center  w-75 p-2 google'>Login with google</h5>
                <div className="inputbox">
                    <input type="text" placeholder='Username' className='mt-5' name='uname' onChange={inputChange} ></input>
                    <input type="text" placeholder='Password' className='mt-5' name='password' onChange={inputChange}></input>
                    <input type="button" className='mt-5 text-white' value='Login' onClick={submit} />
                </div>
            </div>
        </div>
    )
}
