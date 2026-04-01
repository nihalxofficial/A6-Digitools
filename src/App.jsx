import './App.css'
import Banner from './components/Banner/Banner'
import Counter from './components/Counter/Counter'
import Navbar from './components/Navbar/Navbar'
import Pricing from './components/Pricing/Pricing'
import Steps from './components/Steps/Steps'
import Workflow from './components/Workflow/Workflow'

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Counter></Counter>
      <Steps></Steps>
      <Pricing></Pricing>
      <Workflow></Workflow>

    </div>
  )
}

export default App
