import React, { useEffect, useState } from 'react'
import Navdonar from '../../components/Navdonar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Donarview() {

    const dele = (foodid) => {
        axios.delete(`http://127.0.0.1:8000/api/deletesinglefoodview/${foodid}`).then((response) => {
            console.log("deleted");
            navigate('/Donarhome')
        })
    }

    const navigate = useNavigate()

    const donarid = localStorage.getItem("userid")

    const [state, setState] = useState([])




    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/donarfoodview/${donarid}`).then((response) => {
            console.log(response);
            setState(response.data.data)

        }).catch((error) => { console.log(error); })
    }, [])
    console.log(state);


    return (
        <div>

            <div>
                <Navdonar />
            </div>

            <div className='container-don'>

                <div className="row-s pt-5">


                    <div className="col-3">
                        <div className="card-z">

                            {state[0] ?
                                <>
                                    {state?.map((data) => (
                                        <div>

                                            <img src={`/donation/${data.image}`} class="card-z-img-top" />
                                            <h6>Food name:{data.foodname}</h6>
                                            <h6>Food type:{data.foodtype}</h6>
                                            <h6>Quantity:{data.quantity}</h6>
                                            <h6>Cokking time:{data.cookingtime}</h6>
                                            <h6>Address:{data.address}</h6>
                                            <h6>Phone:{data.phone}</h6>

                                            <button type="button" class="btn btn-outline-success" onClick={() => { navigate(`/Donaredit/${data.id}`) }}>Edit</button>
                                            <button type="button" class="btn btn-outline-success" onClick={() => { dele(data.id) }}>Delete</button>
                                        </div>


                                    ))}
                                </>
                                : <h6>data added</h6>
                            }






                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
