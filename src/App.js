import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Aboutus from "./Components/AboutUs/Aboutus";
import Home from "./Components/Home/Home"
import Header from './Components/Header/Header';
import Dainty from './Components/Dainty/Dainty';
import Maincomments from './Components/Maincomments/Maincomments';
import Gallery from './Components/Gallery/Gallery';
import './App.css'


function App() {
  return (
    <div>
        
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/dainty" element={<Dainty />} />
            <Route path="/opinion" element={<Maincomments />} />
          </Routes>
        </Router>
        
    </div>
  );
}

export default App;
