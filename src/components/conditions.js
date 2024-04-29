import { Link } from "react-router-dom"
import Searching from "./search"



function Conditions(){
    return(
    <>
    <div class="bg-gray-100 text-white py-4">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6  text-gray-800 flex flex-wrap justify-center ">
        <div class="p-5">
            <div class="text-xs uppercase text-gray-500 font-medium">Home</div>
            <Link to={'/conditions'} class="my-3 block" href="/#">Conditions <span class="text-teal-600 text-xs p-1"></span>
            </Link>
            <Link to={'/meals'} class="my-3 block" >Meals <span class="text-teal-600 text-xs p-1"></span>
            </Link>
            <Link to={'/recipes'}class="my-3 block" href="/#">recipes <span class="text-teal-600 text-xs p-1"></span>
            </Link>
            
          
        </div>

     
        <div class="p-5">
            <div class="text-xs uppercase text-gray-500 font-medium">nutritional Resources</div>

            <Link to={'/meals'} class="my-3 block" >Meal plans <span class="text-white text-xs p-1"></span>
            </Link>
            <a class="my-3 block" href="/#">Information on conditions <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block" href="/#">Support <span class="text-teal-600 text-xs p-1"></span>
            </a>
        </div>
        <div class="p-5">
            <div class="text-xs uppercase text-gray-500 font-medium"> Nutritional Support</div>

            <a class="my-3 block" href="/#">Nutritional Counselling <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block" href="/#">In-person checkups <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block" href="/#">Consultation <span class="text-teal-600 text-xs p-1"></span>
            </a>
        </div>
      
    </div>
</div>

    </>
)}




export default Conditions