import './App.css'
import Banner from './components/Banner/Banner'
import Counter from './components/Counter/Counter'
import Navbar from './components/Navbar/Navbar'
import Pricing from './components/Pricing/Pricing'
import Steps from './components/Steps/Steps'

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Counter></Counter>
      <Steps></Steps>
      <Pricing></Pricing>

    </div>
  )
}

export default App
