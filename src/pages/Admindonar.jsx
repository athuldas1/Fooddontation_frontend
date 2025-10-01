import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Adminreceiver() {
    const [state, setState] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/UserView').then((response) => {
            console.log(response);
            setState(response.data.data)

        }).catch((error) => { console.log(error); })
    }, [])
    console.log(state);
    return (
        <div>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Donar name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                    </tr>
                </thead>
                <tbody>


                    {state[0] ?
                        <>
                            {state?.map((data) => (
                                <tr>
                                    <th scope="row">*</th>
                                    <td>{data.uname}</td>
                                    <td>{data.email}</td>
                                    <td>{data.password}</td>
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
