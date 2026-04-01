import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Counter from './components/Counter/Counter'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Pricing from './components/Pricing/Pricing'
import Products from './components/Products/Products'
import Steps from './components/Steps/Steps'
import Workflow from './components/Workflow/Workflow'


const loadProducts = async () => {
  const res = await fetch("./Tools.json")
  return res.json();
}
const productPromise = loadProducts()
function App() {
  const [cartItems, setCartItems] = useState([])

  return (
    <div>
      <Navbar cartItems={cartItems}></Navbar>
      <Banner></Banner>
      <Counter></Counter>
      <Products productPromise={productPromise} cartItems={cartItems} setCartItems={setCartItems}></Products>
      <Steps></Steps>
      <Pricing></Pricing>
      <Workflow></Workflow>
      <Footer></Footer>

    </div>
  )
}

export default App
