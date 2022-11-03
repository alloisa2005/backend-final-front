import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route} from 'react-router-dom'


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Footer from "./components/Footer";
import Home from "./screens/Home";
import Store from "./screens/Store";
import Admin from "./screens/Admin";

function App() {
  return (
    <div className="w-100">
      <Navbar />      
        <Routes>
          <Route path="/" element={ <Home />} exact></Route> 
          <Route path="/store" element={ <Store />} exact></Route>
          <Route path="/admin" element={ <Admin />} exact></Route>

          <Route path="*" element={ <Home />} exact></Route> 
        </Routes>      
      <Footer />
    </div>
  );
}

export default App;
