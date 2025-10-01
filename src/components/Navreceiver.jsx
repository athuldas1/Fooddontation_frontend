import React from 'react'
import '../components/Nav.css'

export default function Navreceiver() {
  return (
    <div>
         <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Feed<span>Forward</span></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                          
                            <li class="nav-item">
                                <a class="nav-link" href='/Home'>Receiver</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href='/Receiverview'>Receiverview</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Donations
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/Approve">Approved</a></li>
                                    <li><a class="dropdown-item" href='/Pending'>Pending</a></li>

                                </ul>
                            </li>
           


                            
                            <li class="nav-item">
                                <a class="nav-link" href='/Login'>
                                    Logout
                                </a>
                              
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

    </div>
  )
}
