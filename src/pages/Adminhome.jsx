import React from 'react'
import Navadmin from '../components/Navadmin'
import '../pages/Admin.css'
import ii from '../assets/orphane.jpg'

export default function Adminhome() {
  return (
    <div>
      <div>
        <Navadmin/>
      </div>
      <div className='container-don'>

      <div class="row-s pt-5">

<div class="col-3">
    <div class="card-z">
        <img src={ii} class="card-z-img-top" alt="..." />
        <h3>Donar Details</h3>
        <p>Click the button below to know all donar details</p>
        <a href="/Admindonar"><button type="button" class="btn btn-outline-success">Click here</button></a>
    </div>
    </div>

    <div class="col-3">
    <div class="card-z">
        <img src={ii} class="card-z-img-top" alt="..." />
        <h3>Receiver Details</h3>
        <p>Click the button below to know all receiver details</p>
        <a href="/Adminreceiver"><button type="button" class="btn btn-outline-success">Click here</button></a>
    </div>
    </div>

    <div class="col-3">
    <div class="card-z">
        <img src={ii} class="card-z-img-top" alt="..." />
        <h3>Order Details</h3>
        <p>Click the button below to know all order details</p>
        <a href="/Adminorder"><button type="button" class="btn btn-outline-success">Click here</button></a>
    </div>
    </div>


</div>

      </div>

      

    </div>

  )
}
