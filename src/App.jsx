import { useState } from 'react'
import './App.css'
import ChekoutPage from './Component/Checkoutpage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div>
      <ChekoutPage/>
    </div>


    </>
  )
}

export default App
