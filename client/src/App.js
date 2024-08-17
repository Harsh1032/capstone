import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Login from './components/Registration/Login';
import SignUp from './components/Registration/SignUp';
import Recharge from './components/Recharge/Recharge';
import PrivateRoute from './components/ProtectedRoute';
import Wheel from './components/Wheel/Wheel';

const App = () => {
  return (
    <div className="bg-custom-image bg-repeat ">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signUp' element={<SignUp/>} />
        <Route element={<PrivateRoute />}>
          <Route path='/recharge' element={<Recharge/>} />
        </Route>
        
        <Route path='/wheel' element={<Wheel/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App