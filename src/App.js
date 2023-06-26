import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/';
import SigninPage from './pages/signin';
import PriceList from './pages/prices';
// import Navbar from './components/Navbar'
import Map from './pages/map';


function App() {

  return (
 

 <Router> 
    
   <Routes>
      <Route  path='/treatment' element={<PriceList/>} />
        <Route  path='/'  element={<Home/>}  />
        <Route  path='/signin'  element={<SigninPage/>}  />
        <Route  path='/map'  element={<Map/>}  />
   </Routes>
      
     
  
    </Router>
 

   
  );
}

export default App;
