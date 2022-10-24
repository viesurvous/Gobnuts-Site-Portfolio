import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home';
import Navigation from "./components/Navigation";
import NotFound from "./pages/NotFound";


function App() {
    return (
        <Router>
        <Navigation/>
        <Routes>
          <Route path="*" element={<NotFound/>} />        
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    );
  } 
  
  export default App;
  