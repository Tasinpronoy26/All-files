import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Price from './Component/Price/Price'
import Chart from './Component/Chart/Chart'

function App() {


  return (


    <div className="App">


      <Navbar></Navbar>
      
      <h1 className='text-center font-bold mt-10 text-5xl'>HELLO TO EVERYONE</h1>

      <Price></Price>
      <Chart></Chart>


    </div>

  )
}

export default App
