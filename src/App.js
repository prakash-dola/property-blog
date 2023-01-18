
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './pages/Register';
import Products from './pages/Products';
import Services from './pages/Services';
import Property from './pages/Property'



function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/products' element={<Products/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/property' element={<Property/>}/>


        
      
        
      </Routes>
    
    </Router>
  
    </>
  );
}

export default App;
