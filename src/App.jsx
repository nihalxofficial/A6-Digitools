import './App.css'
import Banner from './components/Banner/Banner'
import Counter from './components/Counter/Counter'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Pricing from './components/Pricing/Pricing'
import Products from './components/Products/Products'
import Steps from './components/Steps/Steps'
import Workflow from './components/Workflow/Workflow'

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Counter></Counter>
      <Products></Products>
      <Steps></Steps>
      <Pricing></Pricing>
      <Workflow></Workflow>
      <Footer></Footer>

    </div>
  )
}

export default App
