import Navbar from './components/Navbar';
import Home from './components/Home';
import Post from './components/Posts';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './app.css';
import Contact from './components/Perso';

function App() {

  
  ///
 
  
    return (
      <div className="App">
        <BrowserRouter>
        
        <Navbar/>

          <Routes>

            <Route path='/' element={<Home/>} />
            <Route path='/post/:id' element={<Post/>} />
            <Route path='/contact' element={<Contact/>} />

          </Routes>
          
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;
  