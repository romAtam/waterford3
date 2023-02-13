import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/';
import SigninPage from './pages/signin';
// import Navbar from './components/Navbar'



function App() {
  return (
 

 <Router> 
    
   <Routes>
      <Route  path='/signin' element={<SigninPage/>} />
        <Route  path='/'  element={<Home/>}  />
   </Routes>
      
     
  
    </Router>
 

   
  );
}

export default App;
