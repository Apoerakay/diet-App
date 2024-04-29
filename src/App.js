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
import Condition from "./pages/conditions";
import Recipe from "./pages/recipePage";
import SignUpInfo from "./components/signUpinfo";
import PersonalInfo from "./components/personalinfo";
import Detail from "./pages/details";
import Other from "./components/otherinfo";

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
   <Route path= '/conditions' element={<Condition/>}></Route> 
   <Route path='/recipes' element={<Recipe/>}></Route>
   <Route path='/personal' element={<PersonalInfo/>}></Route>
   <Route path='/other' element={<Other/>}></Route>
   <Route path='/details/:id' element={<Detail/>}></Route>
</Routes>
</BrowserRouter>

  
  
   
   
  
   {/* <Dashboard/> */}
   </>
  );
}

export default App;
