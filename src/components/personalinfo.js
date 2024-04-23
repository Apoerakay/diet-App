
function PersonalInfo(){
  return(
  <>
  <div class="bg-[url('https://img.freepik.com/premium-photo/background-vegetable-salad-closeup-with-space-text_378630-17587.jpg?w=740')] flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
    
    <div class="bg-white p-10 md:w-2/3 lg:w-1/2 mx-auto rounded justify-center content-center bg-slate-800 border border-slate-400 rounded-md p-12 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
        <form action="">


            <div class="flex items-center mb-10 ">
                <label for="twitter" class="w-20 inline-block text-right mr-4 text-gray-500 text-gray-500">Age</label>
                <input type="number" name="Age" id="Age" placeholder="" class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"/>
            </div>
            <div class="flex items-center mb-10">
                <label for="gender" class="w-20 inline-block text-right mr-4 text-gray-500 text-gray-500">Gender</label>
                
                <select  id="gender" name="gender" class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400">
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                    </select>
            </div>
            <div class="flex items-center mb-10">
                <label for="weight" class="w-20 inline-block text-right mr-4 text-gray-500 text-gray-500">Weight </label>
                <input type="text" name="weight" id="weight" placeholder="Weight in Kg" class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"/>
            </div>
            <div class="flex items-center mb-10">
                <label for="height" class="w-20 inline-block text-right mr-4 text-gray-500 text-gray-500">Height</label>
                <input type="text" name="height" id="height" placeholder="Your height in meters" class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"/>
            </div>
           
            <div class="text-right">
                <button class="py-3 px-8 bg-green-500 text-green-100 font-bold rounded">Submit</button>
            </div>
        </form>
    </div>
</div>
  </>
)}




export default PersonalInfo