import React, { useState } from 'react'
import '../registration/Reg.css'
import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Regdonar() {
    const [input, SetInput] = useState({
        uname: '',
        email: '',
        password: '',
        cpassword: '',




    })

    const [probs, Seterror] = useState({})
    const [issubmit, setsubmit] = useState(false)
    // const [isverified, setverified] =useState(false)

    const validate = (values) => {
        var error = {}
        if (!values.uname) {
            error.uname = 'uname cannot be null'
        }
        if (!values.email) {
            error.email = 'email cannot be null'
        }
        if (!values.password) {
            error.password = 'password cannot be null'
        }
        if (!values.cpassword) {
            error.cpassword = 'cpassword cannot be null'
        }

        return error

    }

    console.log(input)
    const inputchange = (event) => {
        const name = event.target.name
        const value = event.target.value
        SetInput({ ...input, [name]: value })

    }


    const navigate = useNavigate();

    const dataadd = (e) => {
        e.preventDefault();
        Seterror(validate(input))
        setsubmit(true)
        if (Object.keys(probs).length === 0 && issubmit) {
            axios.post('http://127.0.0.1:8000/api/userregister', input).then((res) => {
                console.log(res);
                navigate("/Login")


            }).catch((err) => {
                console.log(err);
            })
            console.log(input)

        }





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
                    <input type="text" placeholder='Username' className='mt-5' name='uname' value={input.uname} onChange={inputchange} onClick={() => { Seterror({ ...probs, uname: '' }) }} ></input>
                    <span style={{color:probs.uname ? 'red' : ''}}>{probs.uname}</span>
                    <input type="text" placeholder='Email' className='mt-5' name='email' value={input.email} onChange={inputchange} onClick={() => { Seterror({ ...probs, email: '' }) }} ></input>
                    <span style={{color:probs.email ? 'red' : ''}}>{probs.email}</span>
                    <input type="text" placeholder='Password' className='mt-5' name='password' value={input.password} onChange={inputchange} onClick={() => { Seterror({ ...probs, password: '' }) }}></input>
                    <span style={{color:probs.password ? 'red' : ''}}>{probs.password}</span>
                    <input type="text" placeholder='Confirmpassword' className='mt-5' name='cpassword' value={input.cpassword} onChange={inputchange} onClick={() => { Seterror({ ...probs, cpassword: '' }) }}></input>
                    <span style={{color:probs.cpassword ? 'red' : ''}}>{probs.cpassword}</span>
                    <input type="button" className='mt-5 text-white' value='Submit' onClick={dataadd} />
                    
                </div>
            </div>
        </div>
    )
}
