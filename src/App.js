import {Route, Routes} from 'react-router-dom';
import Regdonar from './pages/registration/Regdonar';
import Reg from './pages/registration/Reg';
import Login from './pages/login/Login';
import Home from './pages/Home';
import View from './pages/view/View';
import Adminhome from './pages/Adminhome';
import Donarhome from './pages/donar/Donarhome';
import Donarview from './pages/donar/Donarview';
import Donaredit from './pages/donar/Donaredit';
import Receiverview from './pages/Receiverview';
import Order from './pages/donar/Order';
import Approve from './pages/Approve';
import Pending from './pages/Pending';
import Admindonar from './pages/Admindonar';
import Adminreceiver from './pages/Adminreceiver';
import Adminorder from './pages/Adminorder';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Regdonar/>}></Route>
      <Route path='/Reg' element={<Reg/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/View' element={<View/>}></Route>
      <Route path='/Adminhome' element={<Adminhome/>}></Route>
      <Route path='/Donarhome' element={<Donarhome/>}></Route>
      <Route path='/Donarview' element={<Donarview/>}></Route>
      <Route path='/Donaredit/:id' element={<Donaredit/>}></Route>
      <Route path='Order' element={<Order/>}></Route>
      <Route path='/Receiverview' element={<Receiverview/>}></Route>
      <Route path='/Approve' element={<Approve/>}></Route>
      <Route path='/Pending' element={<Pending/>}></Route>
      <Route path='/Admindonar' element={<Admindonar/>}></Route>
      <Route path='/Adminreceiver' element={<Adminreceiver/>}></Route>
      <Route path='/Adminorder' element={<Adminorder/>}></Route>
    </Routes>
    </>
   
  );
}

export default App;
