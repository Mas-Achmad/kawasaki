import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from '../src/Component/ScrollToTop';
import Home from './pages/Home';
import Motorcycle from "./pages/Motorcycle";
import Accesories from "./pages/Accessories";
import About from "./pages/About";
import Login from "./pages/Login";






function App() {
  return (
    <Router>

   <ScrollToTop />
      <Routes>

      
     
        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />

        <Route path="/motorcycle" element={<Motorcycle />} />

        <Route path="/accessories" element={<Accesories />} /> 

        <Route path="/about" element={<About />} />

        <Route path="/login" element={<Login />} />

     
       
      </Routes>
     </Router>
  );
}

export default App;