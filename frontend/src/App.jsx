import React from "react"
import Shopping from './components/cart/Index'
import Product from './components/product/Index'
import Detail from './components/product/Detail'
import Navigation from "./layouts/Navigation";
import NotFound from './components/errors/error'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path="/" exact element={<Product />} />
          <Route path="/product-detail/:id" element={<Detail />} />
          <Route path="/shopping" element={<Shopping/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App;



// !Beda Website
// import React from 'react'
// import Header from './components/Header'
// import { Container } from 'react-bootstrap'
// import Footer from './components/Footer'

// const App = () => {
//   return (
//     <>
//       <Header />
//       <main>
//         <Container>
//           <h1>Hello World!</h1>
//         </Container>
//       </main>
//       <Footer />
//     </>
//   )
// }

// export default App
