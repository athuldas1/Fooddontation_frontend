import React, { useState } from 'react'
import '../donar/Donar.css'
import Navdonar from '../../components/Navdonar'
import dod from '../../assets/fd.jpg'
import hh from '../../assets/oldage.jpg'
import ii from '../../assets/orphane.jpg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// import { Event } from 'react-toastify/dist/core'
export default function Donarhome() {

  const navigate = useNavigate();
  const donar_id = localStorage.getItem('userid')
  console.log(donar_id);


  const [input, SetInput] = useState({
    donarid: donar_id,

  })

  const inputchange = (event) => {
    const { name, value } = event.target
    SetInput({ ...input, [name]: value })
  }
  console.log(input);

  const dataadd = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('foodname', input.foodname)
    formData.append('foodtype', input.foodtype)
    formData.append('quantity', input.quantity)
    formData.append('cookingtime', input.cookingtime)
    formData.append('image', input.image)
    formData.append('address', input.address)
    formData.append('phone', input.phone)
    formData.append('donarid', input.donarid)

    axios.post("http://127.0.0.1:8000/api/addfood",formData).then((res)=>{
      console.log(res);
      navigate("/Donarhome")
      console.log("food have been added suscessfully");


    }).catch((err)=>{
      console.log(err);

    })
    console.log(input);

  }





  return (
    <div>
      <div>
        <Navdonar />
      </div>
      <div className='containerdon'>
        <img src={dod} class="done" alt="..." />


        <div className='dpara'>
          <h1>"Join us in the fight against hunger by making a difference through food donation today."</h1>
          <p>As our country works through the impact of the COVID-19 virus, we want to assure you, our donor and
            charity partners, that our team here at Food Donation Connection (FDC) is committed to your well-being
            and efforts in our mutual mission to get surplus food to those in need.
            FDC is the world’s leading coordinator of surplus prepared food donations and we take food safety
            extremely seriously.we continue to share proper food transport and handling
            procedures with all our donor and charity partners. Our Harvest Support Center is open and prepared to
            take your calls.</p></div>


      </div><br /><br /><br /><br /><br /><br /><br />

      <div className='bord'>
        <div class="donarcard">
          <div class="c1"><div class="card" >
            <img src={hh} class="card-img-top" alt="..." />
            <div class="card-bod">
              <h5 class="card-tit">Don't be rude, donate some food.</h5>
              <p class="card-text"></p>
            </div>
          </div></div>


          <div class="c1"><div class="card" >
            <img src={ii} class="card-img-top" alt="..." />
            <div class="card-bod">
              <h5 class="card-tit">Give what you can.</h5><br />
              <p class="card-text"></p>
            </div>
          </div></div>


          <div class="c1"><div class="card" >
            <img src={hh} class="card-img-top" alt="..." />
            <div class="card-bod">
              <h5 class="card-tit">They deserve to live tomorrow without hunger.</h5>
              <p class="card-text"></p>
            </div>
          </div></div>
          <div class="c1"><div class="card">
            <img src={ii} class="card-img-top" alt="..." />
            <div class="card-bod">
              <h5 class="card-tit">Don’t let your fellow man be hungry.</h5>
              
              <p class="card-text"></p>
            </div>

          </div></div>

          <div className='do'><center> <a href="#" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Donate Now</a></center></div>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Donate Now</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form className='fompic'>
                   

                    <div className='fom'>
                      <label>Food name:</label>
                      <input type='text' name='foodname' onChange={inputchange}></input><br /><br />
                      <label>Food type:</label>
                      <input type='text' name='foodtype' onChange={inputchange}></input><br /><br />
                      <label>Quantity:</label>
                      <input type='text' name='quantity' onChange={inputchange}></input><br /><br />
                      <label>Cokking time:</label>
                      <input type='time' name='cookingtime' onChange={inputchange}></input><br /><br />
                      <label>Image:</label>
                      <input type='file' name='image' onChange={(e)=>SetInput({...input,image:e.target.files[0]})}></input><br /><br />
                      <label>Address:</label>
                      <input type='text' name='address' onChange={inputchange}></input><br /><br />
                      <label>Phone:</label>
                      <input type='number' name='phone' onChange={inputchange}></input>
                    </div>
                  </form>


                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={dataadd}>Donate</button>
                  <button type="button" class="btn btn-primary">Decline</button>
                </div>
              </div>
            </div>
          </div>

        </div></div>


    </div>
  )
}
