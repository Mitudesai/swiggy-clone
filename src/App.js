import Body from "./components/Body";

import { Route, Routes } from "react-router-dom"
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact"
import Restaurentmenu from "./components/Restaurentmenu";
import Cart from "./components/Cart";

function App() {
  return (
   <>
<Header/>
   <Routes>
   
    <Route path="/" element={<Body/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />


    <Route path="/restaurent/:id" element={<Restaurentmenu/>} />

   </Routes>
   
   </>
  )
}

export default App;
