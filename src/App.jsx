import { useState } from 'react'

import { FaArrowAltCircleRight } from "react-icons/fa";
import DropDown from './components/DropDown';


function App() {
   
  const apiKey = import.meta.env.VITE_API_KEY;
    const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const[conversionResult,setConversionResult] = useState(0)
    const [amount,setamount]=useState(0);
  async function getExchange(fromCurrency,toCurrency,amount){
    console.log(amount,"amount")
 const res= await fetch( `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`)
 const data = await res.json()
 setConversionResult(data.conversion_result)
 console.log(data,"data")
  }
 return (
    <div className='h-screen w-screen flex justify-center items-center bg-stock-image bg-cover '>  
    <div className='h-[30vh]  md:h-[50vh] lg:h-[50vh] w-[50vw] bg-gray-200 rounded-lg relative px-6 flex flex-col gap-1 sm:gap3 backdrop-blur-md shadow-lg bg-white/30 border border-white/20'>
        <h1 className='font-bold text-sm sm:text-lg mb-2'> Currency Converter </h1>
        <section className='flex justify-between '> 
          <div className='w-[30%] text-sm sm:text-lg'> 
            <p className='font-semibold'>From:</p>
              <DropDown  selectedCurrency={fromCurrency} currencySetter={setFromCurrency}/>
              </div>
              <FaArrowAltCircleRight className='self-center'/>
          <div className='w-[30%] text-sm sm:text-lg'> 
            <p className='font-semibold text-sm sm:text-lg'>To:</p>
              <DropDown selectedCurrency={toCurrency} currencySetter={setToCurrency}/>
              </div>
             
                 </section>
      
        <input type="number" placeholder='Enter Amount' className='border-2 rounded-md border-black w-full' onChange={(e)=>{setamount(e.currentTarget.value)}}/>
        <p className='text-green-500 text-sm sm:text-lg'>Your Amount After Converting: {conversionResult}</p>
  <button className='self-end bg-[#191970] text-white w-full h-10  sm:w-[20%] rounded-md' onClick={()=>getExchange(fromCurrency,toCurrency,amount)}>Convert</button>
    </div>
    </div>
 )
}

export default App
