import Header from "../components/header";
import Facts from "../components/Facts";
import Footer from "../components/footer";
import Conditions from "../components/conditions";


function Home(){
    return(
        <>
        <Header/>

        <section>
        <div class="bg-gray-100 min-h-screen p-4">

    <div class="container mx-auto pt-[120px] ">
       
        
       
        <p class="text-gray-700 text-lg text-center mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet magna id ex hendrerit semper.
        </p>
        {/* <marquee> */}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            <div class="bg-yellow-300 rounded-lg shadow-lg p-8 h-[300px] w-full text-3xl">
                <h2 class="text-xl font-bold text-gray-800 mb-4 "></h2>
                <p class="text-gray-700 whitespace-normal break-words">
                Start your meals with a salad or a bowl of soup to help control your appetite and prevent overeating. Your waistline will thank you!
                </p>
            </div>
            <div class="bg-violet-600 rounded-lg shadow-lg p-8 text-3xl">
                <h2 class="text-xl font-bold text-gray-800 mb-4"></h2>
                <p class="text-gray-700 whitespace-normal break-words">
                Cut down on processed meats like sausage and bacon. Opt for leaner proteins like grilled chicken or fish instead. Your heart will thank you!
                </p>
            </div>
            <div class="bg-red-600 rounded-lg shadow-lg p-8 text-3xl">
                <h2 class="text-xl font-bold text-gray-800 mb-4"></h2>
                <p class="text-gray-700 whitespace-normal break-words">
                Feeling tired? Boost your energy levels with a handful of almonds or a slice of whole-grain bread topped with peanut butter.
                </p>
                
            </div>
            <div class="bg-violet-600 rounded-lg shadow-lg p-8 text-3xl">
                <h2 class="text-xl font-bold text-gray-800 mb-4"></h2>
                <p class="text-gray-700 whitespace-normal break-words">
                Stay hydrated in Ghana's heat! Drink plenty of water & enjoy refreshing coconut water for electrolytes & hydration
                </p>
            </div>
            <div class="bg-red-600 rounded-lg shadow-lg p-8 text-3xl">
                <h2 class="text-xl font-bold text-gray-800 mb-4"></h2>
                <p class="text-gray-700 whitespace-normal break-words">
                Opt for homemade soups and stews with plenty of vegetables & lean proteins for a comforting yet nutritious meal.
                </p>
                
            </div>
            <div class="bg-violet-600 rounded-lg shadow-lg p-8 text-3xl">
                <h2 class="text-xl font-bold text-gray-800 mb-4"></h2>
                <p class="text-gray-700 whitespace-normal break-words">
                Include a source of protein in each meal, such as grilled fish, tofu, or beans, to help you feel full and satisfied.
                </p>
            </div>
            <div class="bg-red-600 rounded-lg shadow-lg p-8 text-3xl">
                <h2 class="text-xl font-bold text-gray-800 mb-4"></h2>
                <p class="text-gray-700 whitespace-normal break-words">
                Snack on roasted corn on the cob for a fiber-rich option that's perfect for on-the-go.
                </p>
                
            </div>
            <div class="bg-violet-600 rounded-lg shadow-lg p-8 text-3xl">
                <h2 class="text-xl font-bold text-gray-800 mb-4"></h2>
                <p class="text-gray-700 whitespace-normal break-words">
                Cut down on salt by using herbs and spices like basil, thyme, and rosemary to flavor your meals. Your heart will thank you!
                </p>
            </div>
            <div class="bg-red-600 rounded-lg shadow-lg p-8 text-3xl">
                <h2 class="text-xl font-bold text-gray-800 mb-4"></h2>
                <p class="text-gray-700 whitespace-normal break-words">
                Did you know that adding more leafy greens like kontomire and spinach to your diet can boost your iron levels and keep you energized?
                </p>
                
            </div>
            
            
        </div>
       {/* </marquee> */}
    </div>
</div>
        </section>

        <section>
       
        <Facts />
        
        <div className="bg-gray-100">
            <div className="">
               
                <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div class="max-w-lg">
                <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
                <p class="mt-4 text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                    eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat.
                    Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
                    malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.</p>
                <div class="mt-8">
                    <a href="#" class="text-blue-500 hover:text-blue-600 font-medium">Learn more about us
                        <span class="ml-2">&#8594;</span></a>
                </div>
            </div>
            <div class="mt-12 md:mt-0">
                <img src="https://i.pinimg.com/564x/cc/4a/89/cc4a899fec592a8216e9c42a17b2e929.jpg" alt="About Us Image" class="object-cover rounded-lg shadow-md"/>
            </div>
        </div>
    </div>
            </div>
        </div>
        
        </section>
       
        <section class="bg-gray-100 dark:bg-gray-900">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center pt-8">Our Services</h2>
  <div class="container px-4 md:px-12 py-12 mx-auto">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-3 border rounded-lg shadow p-4 md:p-6 text-center">
      <div class="flex flex-wrap flex-col items-center justify-center px-1 md:px-6">
        



        <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-300">Diet Recommendation</h1>

        <p class="mt-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Dignissim fusce tortor, ac sed malesuada blandit.</p>
      </div>

      <div class="flex flex-wrap flex-col items-center justify-center px-6">
        


        <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-300">Nutrition Counselling</h1>

        <p class="mt-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Dignissim fusce tortor, ac sed malesuada blandit.</p>
      </div>

      <div class="flex flex-wrap flex-col items-center justify-center px-6">
       


        <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-300">Meal Planning</h1>

        <p class="mt-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Dignissim fusce tortor, ac sed malesuada blandit.</p>
      </div>
    </div>
  </div>
</section>
<Conditions/>

        <Footer/>
        </>
    )
}

export default Home