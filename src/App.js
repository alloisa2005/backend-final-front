import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route} from 'react-router-dom'


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Footer from "./components/Footer";
import Home from "./screens/Home";

function App() {
  return (
    <div className="w-100">
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home />} exact></Route> 
          <Route path="/tienda" element={ <Home />} exact></Route> 
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
