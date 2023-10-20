import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";

// clerk library
import { ClerkProvider  , SignedIn, SignedOut, UserButton, useUser,RedirectToSignIn} from "@clerk/clerk-react";
import Navbar from "./components/Navbar";

export default function App() {
  // clerk_key variable
  const clerk_key = "pk_test_Y2VydGFpbi1mcm9nLTU0LmNsZXJrLmFjY291bnRzLmRldiQ";

  return (
      <BrowserRouter>
          <Navbar/>  
          <div className="App">      
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>  
      </BrowserRouter>
  );
}
