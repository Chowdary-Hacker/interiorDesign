import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Designs from './components/Designs'; import Mail from './components/Mail'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Designs" element={<Designs/>}/>
        <Route path="/Mail" element={<Mail/>}/>
      </Routes>
    </Router>
      
  );
}

export default App;
