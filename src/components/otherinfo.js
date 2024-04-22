

function Other(){
  return(
  <>
  <div class="bg-gray-100 min-h-screen flex items-center">
    <div class="bg-white p-10 md:w-2/3 lg:w-1/2 mx-auto rounded">
        <form action="">


            <div class="flex items-center mb-10">
                <label for="twitter" class="w-20 inline-block text-right mr-4 text-gray-500 text-gray-500">List any previous medical condition(s)</label>
                <input type="List" name="conditions" id="" placeholder="" class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"/>
            </div>
           
            <div class="flex items-center mb-10">
                <label for="weight" class="w-20 inline-block text-right mr-4 text-gray-500 text-gray-500">List any known allergies </label>
                <input type="text" name="weight" id="weight" placeholder="" class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"/>
            </div>
             <div class="flex items-center mb-10">
                <label for="bolean" class="w-20 inline-block text-right mr-4 text-gray-500 text-gray-500">Are you currently on any medication?</label>
                
                <select  id="" name="" class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400">
                <option value="">Select </option>
                <option value="">Yes</option>
                <option value="">No</option>
                    </select>
            </div>
           
            <div class="text-right">
                <button class="py-3 px-8 bg-green-500 text-green-100 font-bold rounded">Submit</button>
            </div>
        </form>
    </div>
</div>
  </>
)}


export default Other



