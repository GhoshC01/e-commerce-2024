import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home/Home.jsx'
import Login from './pages/login/Login.jsx'
import SignUp from './pages/signUp/SignUp.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CheckoutPages from './pages/checkout/CheckoutPages.jsx'
import CartPages from './pages/cart/CartPages.jsx'
import ProductDetails from './pages/productDetails/ProductDetailsPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>
  },
  {
    path: "/cart",
    element: <CartPages></CartPages>
  },
  {
    path: "/checkout",
    element: <CheckoutPages></CheckoutPages>
  },
  {
    path: "/product-details",
    element: <ProductDetails></ProductDetails>
  },
]);



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <RouterProvider router={router} />    </>
  )
}
    
export default App
