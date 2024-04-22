import React from "react";
import { Route,Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/profilePage";
import Meal from "./pages/meals";
import Facts from "./components/Facts";
import Home from "./pages/home";
import Footer from "./components/footer";
import Form from "./components/form";

function App() {
  return (
   <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/login'element={<Login/>}></Route>
  <Route path= '/signup'element={<Signup/>}></Route>
  <Route path= '/Profile'element={ <Profile/>}></Route>
  <Route path= '/meals' element={ <Meal/>}></Route>
  {/* <Route path= '/form' element={<Form/>}></Route> */}
  
</Routes>
</BrowserRouter>

  
  
   
   
  
   {/* <Dashboard/> */}
   </>
  );
}

export default App;
