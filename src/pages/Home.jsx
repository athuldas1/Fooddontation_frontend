//  .....receiver home page......

import React from 'react'
import pic from '../assets/pic.jpg'
import mm from '../assets/homeless.jpg'
import hh from '../assets/oldage.jpg'
import ii from '../assets/orphane.jpg'
import jj from '../assets/ppp.jpg'
import meal from '../assets/pex.jpg'
import stud from '../assets/stud.jpg'
import '../pages/Home.css'
import Navreceiver from '../components/Navreceiver'
export default function Home() {

  


  return (
    <div>
      <div>
        <Navreceiver />
      </div>
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={meal} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>We offer hope you can help</h5>
              <p>Make your special day and that of your loved ones a little more special.</p>
              <h3>#Donatefood</h3>
            </div>
          </div>
          <div class="carousel-item">
            <img src={pic} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Mid-day meals is an insentive for them</h5>
              <h3>#Donatefood.</h3>
            </div>
          </div>
          <div class="carousel-item">
            <img src={stud} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Feed healthy foods to homeless</h5>
              <h3>#Donatefood.</h3>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div><br /><br />


      <div className='backbody'>

        <h1>"Join us in the fight against hunger by making a difference through food donation today."</h1>
        <p>As our country works through the impact of the COVID-19 virus, we want to assure you, our donor and
          charity partners, that our team here at Food Donation Connection (FDC) is committed to your well-being
          and efforts in our mutual mission to get surplus food to those in need.
          FDC is the world’s leading coordinator of surplus prepared food donations and we take food safety
          extremely seriously.we continue to share proper food transport and handling
          procedures with all our donor and charity partners. Our Harvest Support Center is open and prepared to
          take your calls. </p><br /><br /><br /><br />


      </div><br /><br />


      <div>
        <div class="third">
          <div class="c1"><div class="card" >
            <img src={mm} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Don't be rude, donate some food.</h5>
              <p class="card-text"></p>
            </div>
          </div></div>


          <div class="c1"><div class="card" >
            <img src={hh} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Give what you can.</h5><br /><br />
              <p class="card-text"></p>

            </div>
          </div></div>


          <div class="c1"><div class="card" >
            <img src={ii} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">They deserve to live tomorrow without hunger.</h5><br /><br />
              <p class="card-text"></p>
            </div>

           
          </div></div>


          <div class="c1"><div class="card">
            <img src={jj} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Don’t let your fellow man be hungry.</h5>
              <p class="card-text"></p>
            </div>
          </div></div>

        </div></div><br /><br />

      <form className='coo'>
        <a href=""><h2>About us</h2></a><br />
        <p className='pp'>It  is an independent charitable trust registered under the Indian Trusts Act 1882. We endeavour to implement the Government of India’s PM POSHAN Initiative (formerly the Mid-Day Meal Scheme) to solve at scale the overarching societal issues of classroom hunger and malnutrition in the country.<br />
          It is our firm belief that investing in child nutrition and education is one of the most effective entry points for human development. Driven by this belief, we strive to provide children with a hot, nutritious and tasty mid-day meal every school day as an incentive to come to school. Thus, the vision – ‘No child in India shall be deprived of education because of hunger.’</p>
        <h5><i class="fa-solid fa-phone fa-sm"></i>:9061819723</h5>
        <h5><i class="fa-solid fa-location-dot fa-sm"></i>:Calicut,near Ksrtc bustand</h5><br />
        <div className='logo'><i class="fa-brands fa-square-facebook fa-lg"></i>
          <i class="fa-brands fa-instagram fa-lg"></i>
          <i class="fa-brands fa-square-twitter fa-lg"></i>
          <i class="fa-brands fa-linkedin fa-lg"></i></div>
      </form>


    </div>
  )
}
