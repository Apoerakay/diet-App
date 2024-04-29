
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { Link } from "react-router-dom"


function Profile(){
    return(
    <>
    <Navbar/>
  <section class="w-full overflow-hidden dark:bg-gray-900 bg-gray-100">
    <div class="flex flex-col">
        
        <img src="https://img.freepik.com/premium-photo/group-fresh-vegetables-fruits_135427-235.jpg?w=996" alt="User Cover"
                class="w-[100vw] xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] xs:h-[11rem]" />

        
        <div class="sm:w-[80%] xs:w-[90%] mx-auto flex ">
            <img src="https://user-images.githubusercontent.com/97146356/178326105-5acad276-a967-4df9-b054-3c7c97f55c70.png" alt="User Profile"
                    class="rounded-md lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] xs:w-[7rem] xs:h-[7rem] outline outline-2 outline-offset-2 outline-blue-500 relative lg:bottom-[5rem] sm:bottom-[4rem] xs:bottom-[3rem]" />

            
            <h1
                class="w-full text-left my-4 sm:mx-4 xs:pl-4 text-gray-800 dark:text-white lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl font-serif">
                Azure40</h1>

        </div>

        <div
            class="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4">
            
           
            
            <div class="w-full my-auto py-6 flex flex-col justify-center gap-2">
                <div class="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
                    <div class="w-full">
                        <dl class="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                           
                           
                            <div class="flex flex-col py-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">59 years</dt>
                                <dd class="text-lg font-semibold"></dd>
                            </div>
                            <div class="flex flex-col py-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Male</dt>
                                <dd class="text-lg font-semibold"></dd>
                            </div>
                        </dl>
                        
                        <div class="flex flex-col pt-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">69 kg</dt>
                                <dd class="text-lg font-semibold"></dd>
                            </div>
                    </div>
                    <div class="w-full">
                        <dl class="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                            <div class="flex flex-col pb-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">1.75m</dt>
                                <dd class="text-lg font-semibold"></dd>
                            </div>

                            <div class="flex flex-col pt-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Diabetes</dt>
                                <dd class="text-lg font-semibold"></dd>
                            </div>

                            <div class="flex flex-col pt-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">azure7@gmail.com</dt>
                                <dd class="text-lg font-semibold"></dd>
                            </div>
                            <div class="flex flex-col py-3">
                                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">22.53 kgm2</dt>
                                <dd class="text-lg font-semibold"></dd>
                            </div>
                        </dl>
                    </div>
                </div>
                
               
            </div>

            
           

        </div>
    </div>
    <div class="sm:flex sm:justify-center lg:justify-start">
    <div class="rounded-md shadow ml-[1000px] ">
      
    </div>
    <div class="mt-3 sm:mt-0 sm:ml-3">
        <Link to={"/login"}
            class="w-full flex items-center justify-center px-72 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-800 hover:bg-stone-700 md:py-4 md:text-lg md:px-10">
            logout
        </Link>
    </div>
</div>
</section>

<Footer/>
    </>
)}




export default Profile