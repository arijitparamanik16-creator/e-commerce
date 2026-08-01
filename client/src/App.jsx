import { useState } from 'react'
import Home from './pages/home/Home'
import { Cart } from './pages/cart/Cart'
import Product_details_page from './pages/Product/Product_details_page'
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom'
import Layout from './components/layout/Layout'



function App() {

  return (
    <>
      <Router>

        <Routes>
          <Route element={<Layout />}> {/* parent route / layout route component  */}

              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/product/:id' element={<Product_details_page />} />
            {/* Dynamic URL (Parameterized Route / Route Parameter) id=url parameter(Route Param) */}
          </Route>

        </Routes>
    </Router >
    </>
  )
}

export default App
