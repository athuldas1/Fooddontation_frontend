import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Order() {

    const [state, setState] = useState([])

    const donarid = localStorage.getItem("userid")
    console.log('donarid', donarid);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/donaracceptingview/${donarid}`).then((response) => {
            console.log(response);
            setState(response.data.data)

        }).catch((error) => { console.log(error); })
    }, [])
    console.log(state);

    return (
        <div>

            <table class="table table-dark table-hover">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Receiver name</th>
                        <th scope="col">Foodname</th>
                        <th scope="col">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {state[0] ?
                        <>
                            {state?.map((data) => (


                                <tr>
                                    <th scope="row">1</th>
                                    <td>{data.receivername}</td>
                                    <td>{data.foodname}</td>
                                    <td>{data.address}</td>
                                </tr>
                            ))}
                        </>
                        : <h6>data added</h6>
                    }
                </tbody>
            </table>

        </div>
    )
}

