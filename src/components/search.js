import { useEffect } from "react"


function Searching() {




  const url = "http://localhost:8000/api/Conditions"
  const getConditions = async () => {
    const conditionsData = await fetch("http://localhost:8000/api/Conditions").then((response)=>response.json()).then((conditionsDataaa)=>{console.log(conditionsDataaa)})
    
    
  }
  useEffect(()=>{getConditions()}, [])
  return (


    <>
<p className="text-black">good boy</p>
    </>

  )

};








export default Searching;