import react from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { useState } from "react"


function Login(){
    return(
        <>
       <div class="bg-[url('https://img.freepik.com/free-photo/top-view-mix-vegetables-bowl-with-chicken-drumstick_23-2148369699.jpg?t=st=1713526831~exp=1713530431~hmac=39d77d97c1ef1375a1e30fbb78f9e265cc19969b61ded517a91d1ee76ca97cf9&w=740')] min-h-screen flex items-center justify-center ">

    {/* <div class="absolute inset-0 z-0">
        <img src="https://source.unsplash.com/random/1920x1080" alt=""
            class="w-full h-full object-cover filter blur-lg brightness-50"/>
    </div>  */}

    
    <div class=" justify-center content-center bg-slate-800 border border-slate-400 rounded-md p-12 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
        <h1 class="text-xl font-bold mb-4 text-center">Login</h1>
        <form  className="h-[300px] w-[300px]" action="#" method="POST">
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="email">Email</label>
                <input
                    class="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                    id="email" type="email" placeholder="Email"/>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="password">Password</label>
                <input
                    class="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                    id="password" type="password" placeholder="Password"/>
            </div>
            <Link to='/signup' class="inline-block align-baseline font-bold text-sm text-white hover:text-cyan-800"
                    href="#">
                    Don't have an Account ? SignUp
                </Link>
            <div class="flex items-center justify-between gap-8">
                <Link to={'/'}>
                <button
                    class="bg-green-700 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button">
                    Sign In
                </button> </Link>
                <a class="inline-block align-baseline font-bold text-sm text-cyan-500 hover:text-cyan-800"
                    href="#">
                    Forgot Password?
                </a>
            </div>
        </form>
    </div>
</div>
        </>
    )
}




export default Login