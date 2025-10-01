import React from 'react'
import '../view/View.css'
import ii from '../../assets/orphane.jpg'
import Navbar from '../../components/Navbar'

export default function View() {
    return (
        <div className='bo'>
        <div >
            <div>
                <Navbar/>
            </div>

            <form className='coo'>
          <a href=""><h2>About us</h2></a><br/>
          <p className='pp'>It  is an independent charitable trust registered under the Indian Trusts Act 1882. We endeavour to implement the Government of India’s PM POSHAN Initiative (formerly the Mid-Day Meal Scheme) to solve at scale the overarching societal issues of classroom hunger and malnutrition in the country.<br />

            It is our firm belief that investing in child nutrition and education is one of the most effective entry points for human development. Driven by this belief, we strive to provide children with a hot, nutritious and tasty mid-day meal every school day as an incentive to come to school. Thus, the vision – ‘No child in India shall be deprived of education because of hunger.’</p>
          <h5><i class="fa-solid fa-phone fa-sm"></i>:9061819723</h5>
          <h5><i class="fa-solid fa-location-dot fa-sm"></i>:Calicut,near Ksrtc bustand</h5><br/>
          <div className='logo'><i class="fa-brands fa-square-facebook fa-lg"></i>
          <i class="fa-brands fa-instagram fa-lg"></i>
          <i class="fa-brands fa-square-twitter fa-lg"></i>
          <i class="fa-brands fa-linkedin fa-lg"></i></div>
        </form>
           
        </div>
        </div>
    )
}
