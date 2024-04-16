import Navbar from "./components/navbar";
import Header from "./components/header";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/profilePage";

function App() {
  return (
   <>
   <Header/>
   <Navbar/>
   <Login/>
   <Signup/>
   <Profile/>
   <Dashboard/>
   </>
  );
}

export default App;
