import axios from 'axios';
import './App.css'
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';

function App() {
  const [quotes,setQuotes] =useState([])
  const [displayQuotes,setDisplayQuotes] = useState("")

  

 const fetchdata = async() => {
  const response = await axios.get('https://dummyjson.com/quotes')
  const quotesdata = response.data.quotes
  setQuotes(quotesdata)

  const display=quotesdata.filter((res) => res.id === 1)
  const displayQuote = display[0].quote;
      setDisplayQuotes(displayQuote)
  
 }

 useEffect(() => {
  fetchdata()
 },[])


const changeQuotes = () => {
    let randomNumber = Math.floor(Math.random() *quotes.length)+1
    console.log(randomNumber);

    
    const display=quotes.filter((res) => res.id === randomNumber)
    if(display.length>0){
      const displayQuote = display[0].quote;
      setDisplayQuotes(displayQuote)
      
    }else{
      console.log("no");      
    }
}



 
  return (
    <>
    <div className='w-100 flex bg-[#BBC8FE] h-[100vh] justify-center items-center'>
    
      <div className='flex flex-col w-100 sm:w-8/12 md:w-8/12 lg:w-7/12 xl:w-5/12 h-fit bg-white p-9 rounded-lg shadow-md items-center'>
          <h1 className='text-4xl font-bold '>Quote of the day</h1>
          <div className='w-[120px] h-1 border-t-[3px] border-t-sky-700 my-2'></div>
          <h1 className='text-2xl text-center'>{displayQuotes}</h1>
          <div>

          <button  onClick={changeQuotes} className=' border px-12 py-1 rounded-full bg-sky-500 text-lg font-medium text-white mt-16 hover:bg-sky-600'>Next</button>
          </div>
      </div>
    </div>
    </>
  )
}

export default App
