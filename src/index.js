import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import Navreceiver from './components/Navreceiver';
import Navdonar from './components/Navdonar';
import Navadmin from './components/Navadmin';
import Home from './pages/Home';
import View from './pages/view/View';
import Login from './pages/login/Login';
import Reg from './pages/registration/Reg';
import Regdonar from './pages/registration/Regdonar';
import { BrowserRouter } from 'react-router-dom';
import Adminhome from './pages/Adminhome';
import Donarhome from './pages/donar/Donarhome';
import Donarview from './pages/donar/Donarview';
import Donaredit from './pages/donar/Donaredit';
import Order from './pages/donar/Order';
import Approve from './pages/Approve';
import Pending from './pages/Pending';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>

    {/* <Navbar/> */}
    {/* <Navreceiver/> */}
    {/* <Navdonar/> */}
    {/* <Home/> */}
    {/* <View/> */}
    {/* <Login/> */}
    {/* <Reg/> */}
    {/* <Regdonar/> */}
    {/* <Adminhome/> */}
    {/* <Navadmin/> */}

    {/* <Donarhome/> */}
    {/* <Donarview/> */}
    {/* <Donaredit/> */}
    {/* <Order/> */}
    {/* <Approve/> */}
    {/* <Pending/> */}


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
