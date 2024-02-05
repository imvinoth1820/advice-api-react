import './Advice.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
const Advice = () => {
    const[advice,setAdvice] = useState("Please click button")
     const[count,setCount] = useState(0)
    async function getAdvice() {
        try {
          const response = await axios.get("https://api.adviceslip.com/advice");
          setAdvice(response.data.slip.advice);
          setCount(c => c+1 )

        } catch (error) {
          console.error("Error fetching advice:", error);
        }
   
   
    }
    useEffect(()=>{
        getAdvice()
    },[])
  return (
    <div>
        <h2>{advice}</h2>
        <button onClick={getAdvice}>Get Advice</button>
        <p>You have read <b>{count}</b> pieces of advice </p>
    </div>
  )
}

export default Advice