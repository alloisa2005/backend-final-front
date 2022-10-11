import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./components/Home";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
    </div>
  );
}

export default App;
