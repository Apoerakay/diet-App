import { Link } from "react-router-dom"

function SignUpInfo(){
  return(
  <>
 <div class="bg-[url('https://img.freepik.com/premium-photo/background-vegetable-salad-closeup-with-space-text_378630-17587.jpg?w=740')] flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
        <div class=" justify-center content-center bg-slate-800 border border-slate-400 rounded-md p-12 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">

           
            <h2 class="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
                Sign up for an account
            </h2>


            <form class="space-y-6" method="POST" onSubmit={addUser}>

                <div >
                    <label for="new-password" class="block text-sm font-medium text-gray-700">Username</label>
                    <div class="mt-1">
                        <input name="username" type="username" required
                            class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                    </div>
                </div>

                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">Email</label>
                    <div class="mt-1">
                        <input name="email" type="email-address" autocomplete="email-address" required
                            class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                    </div>
                </div>

                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                    <div class="mt-1">
                        <input name="password" type="password" autocomplete="password" required
                            class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                    </div>
                </div>

                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <div class="mt-1">
                        <input name="confirm_password" type="password" autocomplete="confirm-password" required
                            class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                    </div>
                </div>

                <div>
                    <button type="submit"
                        class="flex w-full justify-center rounded-md border border-transparent bg-green-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">Register
                        Account
                        </button>
                        <Link to='/login' class="inline-block align-baseline font-bold text-sm text-white hover:text-cyan-800"
                    href="#">
                    Have an Account ? SignIn
                </Link>
                </div>
            </form>
        </div>
    </div>
</div>

  </>
)}




export default SignUpInfo