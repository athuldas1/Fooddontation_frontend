import React, { useEffect, useState } from 'react'
import Navreceiver from '../components/Navreceiver'
import axios from 'axios'

export default function Pending() {
    const [state, setState] = useState([])

    const receiverid = localStorage.getItem("userid")
    console.log('receiverid', receiverid);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/donationpending/${receiverid}`).then((response) => {
            console.log(response);
            setState(response.data.data)

        }).catch((error) => { console.log(error); })
    }, [])
    console.log(state);
    return (
        <div>
            <div>
                <Navreceiver />
            </div>
            <div className='container-don'>

                <div className="row-s pt-5">


                    <div className="col-3">
                        <div className="card-z">

                            {state[0] ?
                                <>
                                    {state?.map((data) => (
                                        <div>


                                            <div>

                                                <img src={`/donation/${data.image}`} class="card-z-img-top" />
                                                <h6>Food name:{data.foodname}</h6>
                                                <h6>Food type:{data.foodtype}</h6>
                                                <h6>Quantity:{data.quantity}</h6>
                                                <h6>Cokking time:{data.cookingtime}</h6>
                                                <h6>Address:{data.address}</h6>
                                                <h6>Phone:{data.phone}</h6>

                                            </div>
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
