import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from "./pages/Dashboard";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Contact from './pages/Contact';
import Profile from  "./pages/Profile";
import About from './pages/About'
// import Portfolio from './pages/Porfolio'

function App() {
  return (
    //Main router that allows the routes to connect and work!
    <BrowserRouter>
    <div className="App">
      {/* Make sure there's only ONE route that show up at a time  */}
      <Routes>
        <Route path ="/Dashboard" element = {<Dashboard/>} />
        <Route path = "/" element = {<Signin />}/>
        <Route path = "/contact" element = {<Contact/>}/>
        {/* <Route path = "/portfolio" element = {<Portfolio/>}/> */}
        <Route path = "/profile" element = {<Profile/>}/>
        <Route path = "/signup" element = {<Signup/>}/>
        <Route path = "/signup" element = {<Signup/>}/>
        <Route path = "/about" element = {<About/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
