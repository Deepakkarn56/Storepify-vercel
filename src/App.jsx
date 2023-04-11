import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Store from './components/Store'
import Contact from './components/Contact'
import Account from './components/Account'
import Wishlist from './components/Wishlist'
import Products from './components/Products'
import Cart from './components/Cart'
import { useLocation, Routes, Route } from 'react-router-dom';
import './App.css'
import Information from './components/Information'

function App() {
  const location = useLocation();
  console.log(location);
  return (<>
    {(location.pathname === '/Information') 
      ? <div className="container-fluid p-0">
          <Routes basename="/">
            <Route path='/Information' element={< Information/>} state={{ from: location }} />
          </Routes>
        </div>
      : <div className="container-fluid p-0">
          <Header/>
          <Routes basename="/">
            {/* <Route path='*' element={<NotFound />} state={{ from: location }} /> */}
            <Route path='/singleProductPage' element={<Store/>} state={{ from: location }} />
            <Route path='/contactUs' element={<Contact/>} state={{ from: location }} />
            <Route path="/account" element={<Account />} state={{ from: location }} />
            <Route path='/wishlist' element={< Wishlist/>} state={{ from: location }} />
            <Route path='/Cart' element={<Cart />} state={{ from: location }} />
            <Route path='/Information' element={< Information/>} state={{ from: location }} />
            <Route path='/Products' element={<Products/>} state={{ from: location}} />
            {/* <Route path="/login" element={<Login />} state={{ from: location }} />
            <Route path="/password-reset" element={<ResetPassword />} state={{ from: location }} />
            <Route element={<RequireAuth allowedRoles={[ROLES.SystemAdmin]} />}>
              <Route path="/disableTFA" element={<DisableTFA />} state={{ from: location }} />
            </Route> */}
          </Routes>
          <Footer/>
        </div>     
      }
    </>)
}

export default App
