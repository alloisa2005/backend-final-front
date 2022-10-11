import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./components/Home";

function App() {
  return (
    <div className="w-100">
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home />} exact></Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
