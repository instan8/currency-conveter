import React,{useState,useEffect} from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

function DropDown({selectedCurrency,currencySetter}) {

const [currencies,setCurrencies] = useState([]);
    const [isOpen,setIsOpen] = useState(false);
  const[isDropdown,setIsDropdown] = useState(true);
   
  const apiKey = import.meta.env.VITE_API_KEY;
  
 useEffect(()=>{
  const currencyList =async()=>{
const res= await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/codes`);
const data = await res.json();
let currencyCodes = data.supported_codes.slice(0,10).map(code=>code[0]);


setCurrencies(currencyCodes);
console.log(data.supported_codes.slice(0,10));
  }
  currencyList();
 }
,[])
  return (
    <div className='relative w-full  mb-4'>
      <div className='relative' onClick={()=>{setIsDropdown(!isDropdown);}}> 
      <button className='bg-gray-300 text-sm w-full text-left px-0 sm:px-2' >{selectedCurrency}</button>
      <IoMdArrowDropdown className={`absolute top-1 right-1 ${isDropdown?"block":"hidden"} cursor-pointer`} />
      <IoMdArrowDropup className={`absolute top-1 right-1 ${isDropdown?"hidden":"block"} cursor-pointer`} />

      
      </div>
      <ul className={`absolute w-full list-none left-0 top-100% ${isDropdown?"hidden":"block"}`} >
        {
          currencies.map((currency,index)=><li className=' border-2 text-sm border-gray-500 bg-gray-600 hover:bg-gray-400 cursor-pointer ' onClick={()=>{setIsDropdown(false);currencySetter(currency.replace(/\s+/g, ""))}}>{currency}</li>)
        }
        
      </ul>
    </div>
  )
}

export default DropDown
