import React, {useState} from 'react'
import '../registration/Reg.css'
import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom' 
import axios from 'axios'
export default function Reg() {
    const [input, SetInput] = useState({
        uname: '',
        email: '',
        password: '',
        cpassword: '',
    



    })

    console.log(input)
    const inputchange = (event) => {
        const name = event.target.name
        const value = event.target.value
        SetInput({ ...input, [name]: value })

    }

    
    const navigate = useNavigate();
    const dataadd = (e) => {
        e.preventDefault()


        axios.post('http://127.0.0.1:8000/api/userregister2', input).then((res) => {
            console.log(res);
            navigate("/Login")


        }).catch((err) => {
            console.log(err);
        })
        console.log(input)

    }

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="square">
                <h5 className='text-center pt-5'>Enter your details to sing up </h5>
                <h5 className=' text-center  w-75 p-2 google'>Login with google</h5>
                <div className="inputbox">
                    <input type="text" placeholder='Username' className='mt-5' name='uname' value={input.uname} onChange={inputchange} ></input>
                    <input type="text" placeholder='Email' className='mt-5' name='email' value={input.email} onChange={inputchange}></input>
                    <input type="text" placeholder='Password' className='mt-5' name='password' value={input.password} onChange={inputchange}></input>
                    <input type="text" placeholder='Confirmpassword' className='mt-5' name='cpassword' value={input.cpassword} onChange={inputchange}></input>
                    <input type="button" className='mt-5 text-white' value='Submit' onClick={dataadd} />
                </div>
            </div>
           
        </div>
    )
}
