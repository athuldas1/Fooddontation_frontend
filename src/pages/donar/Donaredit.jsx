import React, { useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import Navreceiver from '../../components/Navreceiver';
import '../donar/Dedit.css'
export default function Donaredit() {
    const { id } = useParams();
    console.log(id)
    const [form, setform] = useState({})
    const [update, setupdate] = useState({})


    const inputchange = (event) => {
        const { name, value } = event.target
        setform({ ...form, [name]: value })
        setupdate({ ...update, [name]: value })
    }
    console.log(update);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/singlefoodview/${id}`).then((response) => {
            console.log("there is nothing", response);
            setform(response.data.data)
            // console.log(form);

        }).catch((err) => {
            console.log(err);
        })
    }, [])


    const navigate = useNavigate()
    // --------
    const change = (e) => {
        e.preventDefault()
        axios.post(`http://127.0.0.1:8000/api/updatefood/${id}`, update,).then((response) => {

            console.log(response);
            navigate('/Donarview')
        })
    }



    return (
        <div>

            <div>
                <Navreceiver />
            </div>

            <div class="form-body">
            <center> <form>


                  <div className='fomz'><br/><br/><br/>
                        <label>Food name:</label>
                        <input type='text' name='foodname' onChange={inputchange}></input><br /><br />
                        <label>Food type:</label>
                        <input type='text' name='foodtype' onChange={inputchange}></input><br /><br />
                        <label>Quantity:</label>
                        <input type='text' name='quantity' onChange={inputchange}></input><br /><br />
                        <label>Cokking time:</label>
                        <input type='time' name='cookingtime' onChange={inputchange}></input><br /><br />
                        <label>Image:</label>
                        <input type='file' name='image' onChange={inputchange}></input><br /><br />
                        <label>Address:</label>
                        <input type='text' name='address' onChange={inputchange}></input><br /><br />
                        <label>Phone:</label>
                        <input type='number' name='phone' onChange={inputchange}></input><br/><br/><br/>
                        <button type="button" class="btn btn-outline-success" onClick={change}>Done</button>
                    </div>
                </form></center>


            </div>

        </div>
    )
}
