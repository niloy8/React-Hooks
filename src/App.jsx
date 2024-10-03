
import { useState } from 'react'
import './App.css'
import Effect from './Components/useEffect/Effect'
import Input from './Components/useRef/Input'
import Counter from './Components/useReducer/Counter'
import Layout from './Components/CustomHooks/Layout'
import ClickCounter from './Components/HOC/ClickCounter'
import HoverCounter from './Components/HOC/HoverCounter'
import Formik from './Components/UseFormik/Formik'

function App() {
  const [show, setshow] = useState(true)

  return (
    <>
      {show && <Effect></Effect>}
      <button onClick={() => setshow(prev => !prev)}>show both</button>
      <Input></Input>
      <ClickCounter></ClickCounter>
      <HoverCounter></HoverCounter>
      <Counter></Counter>
      <Layout></Layout>
      <Formik></Formik>
    </>
  )
}

export default App
