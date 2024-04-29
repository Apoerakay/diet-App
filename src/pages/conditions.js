import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

function Condition() {
  const [conditions, setConditions]= useState([])
  const [conditionName, setConditionName] = useState("")
  const url = "http://localhost:8000/api/Conditions"
  const getConditions = async () => {
    const conditionsData = await fetch("http://localhost:8000/api/Conditions").then((response)=>response.json()).then((conditionsDataaa)=>{
      setConditions(conditionsDataaa)  
    console.log(conditionsDataaa)})
    
    
  }
  const filteredConditions = conditions.filter((value)=>{
    const results = conditionName=== "" || value.title.toLowerCase().includes(conditionName.toLowerCase())
    return results
  })
  useEffect(()=>{getConditions()}, [])
  return (
    <>


<Navbar/>
    
       <section class=" bg-gray-100">
        <div class="py-10  sm:py-16 block lg:py-24 relative bg-opacity-50  z-40  ">
          <div class="relative mx-auto h-full px-4 pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
            <div class=" absolute  top-0 -right-1/4 z-0  opacity-10 "></div>

            <div class=" absolute -bottom-0 -left-1/4 z-0  opacity-10 "></div>
            <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
              <div class="max-w-xl mx-auto text-center">
                <div class="inline-flex px-4 py-1.5 mx-auto rounded-full  ">
                  <p class="text-4xl font-semibold tracking-widest text-g uppercase">
                    Conditions
                  </p>
                </div>

                <form onChange={(event)=>setConditionName(event.target.value)} class="max-w-md mx-auto pt-12">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"></label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search....." required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-green-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
                
              </div>
              <div class="grid grid-cols-1 gap-2 mt-12 sm:grid-cols-3 lg:mt-20   ">
                {filteredConditions.map((data) => {
                  return (
                    <>
                      <Link to={`/details/${data._id}`}
                        href="#"
                        class="transition-all  duration-1000 bg-white hover:bg-blue-500  hover:shadow-xl m-2 p-4 relative z-40 group  "
                      >
                        <div class=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
                        <div class="py-2 px-9 relative  ">
                          <h3 class="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                            {data.title}
                          </h3>
                          <p class="mt-4 text-base text-gray-600 group-hover:text-white  ">
                            {data.description}
                          </p>
                        </div>
                      </Link>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section> 
      
    </>
  );
}

export default Condition;
