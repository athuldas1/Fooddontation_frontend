import React, { useEffect, useState } from 'react'
import Navreceiver from '../components/Navreceiver'
import '../pages/Receivervi.css'
import axios from 'axios'
import Login from './login/Login'

export default function Receiverview() {


    const [state, setState] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/receiverfoodview').then((response) => {
            console.log(response);
            setState(response.data.data)

        }).catch((error) => { console.log(error); })
    }, [])
    console.log(state);


    const receiverid = localStorage.getItem("userid")
    console.log('userid', receiverid);

    const [accept, setaccept] = useState({
        receiverid: receiverid,
        donarid: null,
        foodid: null,

    })
    const accepting = (fd, dd) => {
        setaccept({
            ...accept,
            donarid: dd,
            foodid: fd,
        })
        console.log('guhuhh', accept);


    }

    useEffect(() => {
        if (accept.donarid != undefined) {
            axios.post('http://127.0.0.1:8000/api/acceptingAPIView', accept).then((response) => {
                console.log("ther is nothing", response);



            }).catch((err) => {
                console.log(err);
            })
        }
        console.log('accept', accept);
    }, [accept]);






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

                                                <button type="button" class="btn btn-outline-success" onClick={() => accepting(data.id, data.donarid)} >Accept</button>
                                                <button type="button" class="btn btn-outline-success" >Decline</button>
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
