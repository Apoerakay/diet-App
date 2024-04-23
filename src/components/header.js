import React from "react";
import Facts from "./Facts";
import Navbar from "./navbar";


function Header(){
    return(
    <>
 <Navbar/>
    <div className="inset-0 bg-[url('./assets/bg1.jpg')]  p-8 bg-center bg-cover h-lvh w-full text-center text-white">
        
          
        

        
<form class="max-w-md mx-auto pt-12">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"></label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search....." required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-green-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

<div className="flex min-h-screen items-center justify-center bg-transparent pr-[500px] pb-[900px] mb-[500px] ">
           <h1 className="text-stone-900 text-6xl w-1/2 pt-[100px] font-bold animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5  "> 
                Let Food Be Your Medicine !!
            </h1>
           </div>

</div>




    </>
)};







export default Header